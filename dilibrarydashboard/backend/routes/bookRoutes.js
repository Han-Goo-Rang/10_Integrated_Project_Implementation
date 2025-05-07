import express from "express";
import {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getBooks).post(protect, createBook);
router.route("/:id").put(protect, updateBook).delete(protect, deleteBook);

export default router;
