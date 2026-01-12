import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGigs } from "../app/gigSlice";
import { Link } from "react-router-dom";

const GigList = () => {
  const dispatch = useDispatch();
  const { list: gigs } = useSelector((state) => state.gigs);

  useEffect(() => {
    dispatch(getGigs());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Gigs
      </h1>

      {gigs.length === 0 ? (
        <p className="text-center text-gray-600">
          No gigs available right now.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <div
              key={gig._id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">
                {gig.title}
              </h2>

              <p className="text-gray-600 mt-2 line-clamp-3">
                {gig.description}
              </p>

              <p className="mt-3 font-bold">
                Budget: ₹{gig.budget}
              </p>

              <Link
                to={`/gigs/${gig._id}`}
                className="inline-block mt-4 text-white bg-black px-4 py-2 rounded hover:bg-gray-800"
              >
                View & Bid
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GigList;
