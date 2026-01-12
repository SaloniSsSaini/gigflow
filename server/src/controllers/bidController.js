import Bid from "../models/Bid.js";
import Gig from "../models/Gig.js";
import mongoose from "mongoose";

export const submitBid = async (req, res) => {
  const bid = await Bid.create({
    ...req.body,
    freelancerId: req.user._id
  });
  res.status(201).json(bid);
};

export const getBidsByGig = async (req, res) => {
  const bids = await Bid.find({ gigId: req.params.gigId });
  res.json(bids);
};

// 🔥 HIRING LOGIC (TRANSACTION SAFE)
export const hireBid = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const bid = await Bid.findById(req.params.bidId).session(session);
    const gig = await Gig.findById(bid.gigId).session(session);

    if (gig.status === "assigned")
      throw new Error("Gig already assigned");

    gig.status = "assigned";
    bid.status = "hired";

    await bid.save({ session });
    await gig.save({ session });

    await Bid.updateMany(
      { gigId: gig._id, _id: { $ne: bid._id } },
      { status: "rejected" },
      { session }
    );

    await session.commitTransaction();
    res.json({ message: "Freelancer hired successfully" });
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ message: error.message });
  } finally {
    session.endSession();
  }
};
