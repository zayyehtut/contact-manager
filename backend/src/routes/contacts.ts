import express from "express";
import * as contactController from "../controllers/contactController";

const router = express.Router();

router.get("/", contactController.getAllContacts);
router.post("/", contactController.addContact);
router.get("/middle", contactController.findMiddleContact);

export default router;
