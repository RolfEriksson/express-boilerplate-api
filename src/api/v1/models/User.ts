import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Not sure if best way of typing.
export interface IUser extends mongoose.Document {
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
  setPassword: (password: string) => {};
  validatePassword: (password: string) => {};
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *          - salt
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *          salt:
 *            type: string
 *            description: Used to create encrypted password..
 */
const userSchema = new mongoose.Schema({
    password: String,
    salt: String,
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

userSchema.methods.setPassword = function(password: string) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
};

userSchema.methods.validatePassword = function(password: string) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
  return this.password === hash;
};

userSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    token: this.generateJWT(),
    username: this.username
  };
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
