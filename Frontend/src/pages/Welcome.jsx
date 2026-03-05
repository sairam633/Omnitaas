import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Welcome {username}</h1>

        <p className="text-gray-600 mb-6">You have successfully logged in.</p>

        <Button
          label="Logout"
          icon="pi pi-sign-out"
          severity="danger"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
