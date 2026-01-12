import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const GigDetail = () => {
  const { id } = useParams();
  const [gig, setGig] = useState(null);
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const gigRes = await axiosInstance.get(`/gigs/${id}`);
    const bidRes = await axiosInstance.get(`/bids/${id}`);
    setGig(gigRes.data);
    setBids(bidRes.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const submitBid = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axiosInstance.post("/bids", {
      gigId: id,
      message: e.target.message.value,
      price: e.target.price.value,
    });

    e.target.reset();
    await fetchData();
    setLoading(false);
  };

  const hireFreelancer = async (bidId) => {
    await axiosInstance.patch(`/bids/${bidId}/hire`);
    await fetchData();
    alert("Freelancer hired successfully!");
  };

  if (!gig) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">{gig.title}</h1>
        <p className="text-gray-700">{gig.description}</p>
        <p className="mt-2 font-semibold">
          Budget: ₹{gig.budget}
        </p>

        {/* BID FORM */}
        <form
          onSubmit={submitBid}
          className="mt-6 border-t pt-4"
        >
          <h2 className="text-xl font-bold mb-3">
            Submit a Bid
          </h2>

          <input
            name="message"
            placeholder="Your message"
            required
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            name="price"
            type="number"
            placeholder="Your price"
            required
            className="w-full border p-2 mb-3 rounded"
          />

          <button
            disabled={loading}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            {loading ? "Submitting..." : "Submit Bid"}
          </button>
        </form>

        {/* BID LIST */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            All Bids
          </h2>

          {bids.length === 0 && (
            <p className="text-gray-500">
              No bids yet.
            </p>
          )}

          {bids.map((bid) => (
            <div
              key={bid._id}
              className="border p-4 mb-3 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{bid.message}</p>
                <p>₹ {bid.price}</p>
                <p className="text-sm text-gray-600">
                  Status: {bid.status}
                </p>
              </div>

              {bid.status === "pending" && (
                <button
                  onClick={() => hireFreelancer(bid._id)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Hire
                </button>
              )}

              {bid.status === "hired" && (
                <span className="text-green-600 font-bold">
                  HIRED
                </span>
              )}

              {bid.status === "rejected" && (
                <span className="text-red-500">
                  Rejected
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GigDetail;
