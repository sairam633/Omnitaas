import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome {username}</h1>

        <p className="text-gray-600 mb-6">You have successfully logged in</p>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
