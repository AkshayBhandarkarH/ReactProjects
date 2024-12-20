// import React, { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   // usestate for setting a javascript
//   // object for storing and using data
//   const [data, setdata] = useState({
//     name: "",
//     age: 0,
//     date: "",
//     programming: "",
//   });

//   // Using useEffect for single rendering
//   useEffect(() => {
//     // Using fetch to fetch the api from
//     // flask server it will be redirected to proxy
//     // fetch("/data").then((res) =>
//     //   res.json().then((data) => {
//     //     // Setting a data from api
//     //     setdata({
//     //       name: data.Name,
//     //       age: data.Age,
//     //       date: data.Date,
//     //       programming: data.programming,
//     //     });
//     //   })
//     // );

//     axios
//       .get("/data")
//       .then((response) =>
//         setdata({
//           name: response.data.Name,
//           age: response.data.Age,
//           date: response.data.Date,
//           programming: response.data.programming,
//         })
//       )
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React and flask</h1>
//         {/* Calling a data from setdata for showing */}
//         <p>{data.name}</p>
//         <p>{data.age}</p>
//         <p>{data.date}</p>
//         <p>{data.programming}</p>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // State for storing form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    date: "",
    programming: "",
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending a POST request to the server
    axios
      .post("/data", formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => console.error("Error sending data:", error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Send Data from React to Flask</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input
            type="text"
            name="programming"
            value={formData.programming}
            onChange={handleChange}
            placeholder="Favorite Programming Language"
            required
          />
          <button type="submit">Send Data</button>
        </form>
      </header>
    </div>
  );
}

export default App;
