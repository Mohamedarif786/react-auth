import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.setItem("login","false");
    navigate('/login');
  }
  return (
    <div>
      <p>Dashboard</p>
      <button onClick={()=> logout()}>LogOut</button>
    </div>
  );
};

export default Dashboard;
