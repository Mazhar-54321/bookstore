import * as UserService from "../services/user.service.js";
import HttpStatus from "http-status-codes";
export const addUser = async (req, res, next) => {
  try {
    const { email, password,name } = req.body;
    const data = await UserService.addUser({
      name:name,
      email: email,
      password: password,
    });
    res
      .status(HttpStatus.CREATED)
      .json({ data: {email,password,name}, message: "User added successfully" });
  } catch (err) {
    next({ message: err.message, code: 400 });
  }
};
export const getUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await UserService.getUser({
      email: email,
      password: password,
    });
    res.status(HttpStatus.OK).json({ accessToken: data });
  } catch (err) {
    next({ code: 404, message: err.message });
  }
};
