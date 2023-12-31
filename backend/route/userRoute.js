import express from "express";
const router = express.Router();
import {
  signup,
  signin,
  getData,
  getChat,
  sendMsg,
  declineVideo
} from "../controller/userController.js";
import { requireSignin } from "../common-middleware/user.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/get-data", getData);
router.get("/get-chat", requireSignin, getChat);
router.post("/send-msg", requireSignin, sendMsg);
router.post("/decline-video", requireSignin, declineVideo);

export default router;
