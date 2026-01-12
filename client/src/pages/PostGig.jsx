import { useDispatch } from "react-redux";
import { addGig } from "../app/gigSlice";

const PostGig = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addGig({
        title: e.target.title.value,
        description: e.target.description.value,
        budget: e.target.budget.value,
      })
    );

    e.target.reset();
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-6">Post a Gig</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Gig Title</label>
          <input
            name="title"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            placeholder="Enter gig title"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            required
            rows="4"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            placeholder="Describe the job"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Budget (₹)</label>
          <input
            type="number"
            name="budget"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            placeholder="Enter budget"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Post Gig
        </button>
      </form>
    </div>
  );
};

export default PostGig;
