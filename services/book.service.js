import BookModel from "../models/book.model.js";
import mongoose from "mongoose";

export const addBook = async (bookObj) => {
  const data = await BookModel.create(bookObj);
  return data;
};
export const removeBook = async (bookId = "") => {
  const data = await BookModel.findByIdAndDelete(
    new mongoose.Types.ObjectId(bookId)
  );
  return data;
};
export const updateBook = async (bookId = "", bookObj) => {
  console.log(bookId, bookObj);
  const data = await BookModel.findByIdAndUpdate(
    new mongoose.Types.ObjectId(bookId),
    { $set: bookObj },
    { new: true }
  );
  return data;
};
export const getBooks = async () => {
  const data = await BookModel.find();
  return data;
};
export const getBook = async (id = "") => {
  const data = await BookModel.findById(new mongoose.Types.ObjectId(id));
  return data;
};
