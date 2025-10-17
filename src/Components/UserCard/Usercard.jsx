import React from "react";
import { Link } from "react-router-dom";
import "../UserCard/UserCard.css"
const Usercard = ({ user }) => {
  return (
    <div
      className="user-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
     
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>

      <Link to={`/user/${user.id}`}>
        <button className="details-btn" >  View Details </button>
      </Link>
    </div>
  );
};

export default Usercard;
