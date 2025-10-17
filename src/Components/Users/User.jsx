import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Users/User.css"
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <h2 className="animate-spin  text-center  text-yellow-100">Loading...</h2>;

  return (
    <div
      className="user-container"
      style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}
    >
      <img
        src={user.image}
        alt={user.firstName}
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h2>{user.firstName} {user.lastName}</h2>
      <h3>{user.email}</h3>
      <p>{user.phone}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default User;
