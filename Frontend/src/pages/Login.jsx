import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import API from "../api";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await API.post("/login", {
        username,
        password,
      });

      localStorage.setItem("username", res.data.username);
      navigate("/welcome");
    } catch (err) {
      setError("Invalid username or password");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all duration-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Username</label>

            <InputText
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
              placeholder="Enter username"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Password</label>

            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              feedback={false}
              className="w-full"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button
            label="Login"
            icon="pi pi-sign-in"
            loading={loading}
            className="w-full"
          />
        </form>
      </div>
    </div>
  );
}
