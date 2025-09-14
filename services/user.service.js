import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const addUser = async (user) => {
const hashedPassword = await bcrypt.hash(user.password, 10);
  const data = await UserModel.create({ ...user, password: hashedPassword });
  return data;
  
  
};

export const getUser = async (user) => {
  const { email, password } = user;
  const data = await UserModel.findOne({
    email: email,
  });
  if (data) {
    const compare = await bcrypt.compare(password, data.password);
    if (compare) {
      const payload = { email: user.email };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
      return token;
    } else {
      throw new Error("Passwords do not match");
    }
  } else {
    throw new Error("User do not exists");
  }
};
