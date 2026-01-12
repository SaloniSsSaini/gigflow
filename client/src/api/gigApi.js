import axiosInstance from "../utils/axiosInstance";

export const fetchGigs = (search = "") =>
  axiosInstance.get(`/gigs?search=${search}`);

export const createGig = (data) =>
  axiosInstance.post("/gigs", data);

export const fetchSingleGig = (id) =>
  axiosInstance.get(`/gigs/${id}`);
