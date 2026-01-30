import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

export type UserType = Document & {
  username: string;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
};

const userSchema = new mongoose.Schema<UserType>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.pre<UserType>("save", async function () {
  if (this.username) {
    this.username =
      this.username.charAt(0).toUpperCase() + this.username.slice(1);
  }

  if (this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string,
) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User =
  mongoose.models.User || mongoose.model<UserType>("User", userSchema);
export default User;
