import axiosInstance from "../utils/axiosInstance";

export const submitBid = (data) =>
  axiosInstance.post("/bids", data);

export const fetchBidsByGig = (gigId) =>
  axiosInstance.get(`/bids/${gigId}`);

export const hireBid = (bidId) =>
  axiosInstance.patch(`/bids/${bidId}/hire`);
