import express from "express";
const route = express.Router();
import { createNewRecords, getAllRecord, readRecordsById } from "../controllers/crudController.js";

// route Setup
route.get("/", getAllRecord);

route.post("/create", createNewRecords);

route.get("/read/:id", readRecordsById);

export default route