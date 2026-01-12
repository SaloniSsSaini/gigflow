import { useDispatch } from "react-redux";
import { register } from "../app/authSlice";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      register({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input
          name="name"
          placeholder="Name"
          required
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full border p-2 mb-4 rounded"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
