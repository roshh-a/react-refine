import React from "react";
import { useLogout } from "@refinedev/core";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button.tsx";

const Dashboard: React.FC = () => {
  const { mutateAsync: logout } = useLogout();
  const navigate = useNavigate();

  const handleSignoff = async () => {
    try {
      const result = await logout();
      if (result.success && result.redirectTo) {
        navigate(result.redirectTo); // Navigate to the login page after logout
      }
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        onClick={handleSignoff}
        name="Sign out"
      ></Button>
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard!</p>
      </div>
    </div>
  );
};
export default Dashboard;