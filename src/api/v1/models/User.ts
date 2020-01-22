import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Not sure if best way of typing.
export interface UserI extends mongoose.Document {
  password: {
    type: string;
    unique: boolean;
    required: boolean;
  };
  username: {
    type: string;
    unique: boolean;
    required: boolean;
  };
  generateJWT: () => {};
  toAuthJSON: () => {};
}

const userSchema = new mongoose.Schema({
    password: {
        type: String
    },
    username: {
        type: String,
        unique: true
    }
});

userSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      exp: parseInt(String(expirationDate.getTime() / 1000), 10),
      id: this._id,
      username: this.username
    },
    process.env.JWT_SECRET
  );
};

userSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    token: this.generateJWT(),
    username: this.username
  };
};

const User = mongoose.model<UserI>("User", userSchema);

export default User;
