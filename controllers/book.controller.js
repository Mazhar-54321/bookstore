import * as BookServices from "../services/book.service.js";
import HttpStatus from "http-status-codes";

export const addBook = async (req, res, next) => {
  try {
    const data = await BookServices.addBook(req.body);
    res.status(HttpStatus.CREATED).json({
      data: data,
      message: "Book added successfully",
    });
  } catch (err) {
    next({ code: 404, message: err.message });
  }
};
export const removeBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const data = await BookServices.removeBook(bookId);
    if (!data) {
      next({ code: HttpStatus.NOT_FOUND, message: "Book not found" });
    } else {
      res.status(HttpStatus.OK).json({
        data: data,
        message: "Book removed successfully",
      });
    }
  } catch (err) {
    next({ code: 404, message: err.message });
  }
};
export const updateBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const { title, author, genre, price } = req.body;
    const bookObj = { title, author, genre, price };
    const data = await BookServices.updateBook(bookId, bookObj);
    res.status(HttpStatus.OK).json({
      data: data,
      message: "Book updated successfully",
    });
  } catch (err) {
    next({ code: 404, message: err.message });
  }
};
export const getBooks = async (req, res, next) => {
  const data = await BookServices.getBooks();
  try {
    res.status(HttpStatus.OK).json({
      data: data,
      message: "All Books fetched successfully",
    });
  } catch (err) {
    next({ code: 404, message: err.message });
  }
};
export const getBook = async (req, res, next) => {
  const data = await BookServices.getBook(req.params.id);

  try {
    if (!data) {
      next({ code: HttpStatus.NOT_FOUND, message: "Book not found" });
    } else {
      res.status(HttpStatus.OK).json({
        data: data,
        message: "Book fetched successfully",
      });
    }
  } catch (err) {
    next({ code: 404, message: err.message });
  }
};
