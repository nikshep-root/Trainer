import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      alert("Login successfull...");
      navigate("/search");
    } catch (error) {
      alert("Invalid creadential !");
    }
  };

  return (
    <>
      <div className=" d-flex justify-content-center align-items-center vh-100 ">
        <div className=" p-4 bg-body-secondary rounded-3">
          <h3 className="mb-4">Trainer Search App</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-4 ">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>

            <div className="mb-2 ">
              <input
                className="form-control"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <br></br>
            <button className="btn btn-success " type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};