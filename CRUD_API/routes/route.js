import express from "express";
const route = express.Router();
import { createNewRecords, deleteRecordsById, getAllRecord, readRecordsById, updateRecordsById } from "../controllers/crudController.js";

// route Setup
route.get("/", getAllRecord);

route.post("/create", createNewRecords);

route.get("/read/:id", readRecordsById);

route.post("/update/:id", updateRecordsById);

route.get("/delete/:id", deleteRecordsById);

export default route