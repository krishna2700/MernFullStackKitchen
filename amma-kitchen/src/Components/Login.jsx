import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Login = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy authentication logic based on user type
    if (userType === "admin") {
      if (email === "admin@example.com" && password === "admin123") {
        console.log("Admin login successful");
        enqueueSnackbar("Admin login successful", { variant: "success" });
        navigate("/admin");
      } else {
        console.log("Invalid admin credentials");
        enqueueSnackbar("Invalid admin credentials", { variant: "error" });
      }
    } else if (userType === "mom") {
      if (email === "mom@example.com" && password === "mom123") {
        console.log("Mom login successful");
        enqueueSnackbar("Mom login successful", { variant: "success" });
        navigate("/mom");
      } else {
        console.log("Invalid mom credentials");
        enqueueSnackbar("Invalid mom credentials", { variant: "error" });
      }
    } else if (userType === "customer") {
      if (email === "customer@example.com" && password === "customer123") {
        console.log("Customer login successful");
        enqueueSnackbar("Customer login successful", { variant: "success" });
        navigate("/customer");
      } else {
        console.log("Invalid customer credentials");
        enqueueSnackbar("Invalid customer credentials", { variant: "error" });
      }
    } else {
      console.log("Invalid user type");
      enqueueSnackbar("Invalid user type", { variant: "error" });
    }
  };

  return (
    <div>
      <label>User Type:</label>
      <input
        type="text"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      />

      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
