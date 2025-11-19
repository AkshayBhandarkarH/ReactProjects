import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import User from "./user";
function Register() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const [view, setView] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    axios
      .post("http://127.0.0.1:5000/register", info)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        alert("Registration Successful!");
      })
      .catch((error) => console.error("Error sending data:", error));
  };
  // const handleClick = () => {
  //   axios
  //     .get("http://127.0.0.1:5000/api/data")
  //     .then((response) => {
  //       const users = response.data;
  //       const matchedUser = users.find((user) => user.username === info.username && user.email === info.email && user.password === info.password);
  //       if (matchedUser) {
  //         navigate("/User");
  //       } else {
  //         console.error("Invalid credentials");
  //         alert("Invalid username, email, or password.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       alert("Error while connecting to the server. Please try again later.");
  //     });
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={info.username} placeholder="Enter Username" onChange={handleChange}></input>
        <input type="email" name="email" value={info.email} placeholder="Enter email" onChange={handleChange}></input>

        <input type="password" name="password" value={info.password} placeholder="Enter password" onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
