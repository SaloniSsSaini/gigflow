import express from "express";
import { submitBid, getBidsByGig, hireBid } from "../controllers/bidController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, submitBid);
router.get("/:gigId", protect, getBidsByGig);
router.patch("/:bidId/hire", protect, hireBid);

export default router;
