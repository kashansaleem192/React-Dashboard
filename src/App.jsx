import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Product from "./Components/Product/Product";
import Card from "./Components/Card/Card";
import GithubUserFinder from "./Components/Github-User_Finder/Githubuserfinder";
import User from "./Components/Users/User";
import Usercard from "./Components/UserCard/Usercard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Card/Dashboard/Dashboard";

function App() {
  
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Sidebar />
      <Navbar />
      <Dashboard/>
      
      <div style={{ marginLeft: "14%" }}>
        <Routes>
      
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/card"
            element={
              <div className="container grid grid-cols-4 gap-4 p-4">
                {products.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            }
          />
          <Route
            path="/user"
            element={
              <div className="container grid grid-cols-4 gap-4 p-4">
                {users.map((user) => (
                  <Usercard key={user.id} user={user} />
                ))}
              </div>
            }
          />
          <Route path="/user/:id" element={<User />} />
          <Route path="/github" element={<GithubUserFinder />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


