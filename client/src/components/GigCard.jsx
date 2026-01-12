import { Link } from "react-router-dom";

const GigCard = ({ gig }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{gig.title}</h2>
      <p>Budget: ₹{gig.budget}</p>
      <Link to={`/gigs/${gig._id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default GigCard;
