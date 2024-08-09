import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Information from "./Information";

const AddInterview = () => {
  const [companyName, setCompanyName] = useState("");
  const [topics, setTopics] = useState(""); // Input as a comma-separated string
  const [date, setDate] = useState(""); // New state for date
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert topics string to array
    const topicsArray = topics.split(",").map((topic) => topic.trim());

    const interview = { companyName, topics: topicsArray, date };

    axios
      .post("http://localhost:4000/add-interview", interview)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Data submitted successfully!",
          icon: "success",
          confirmButtonText: "View Data",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/view-interviews");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "There was an issue submitting your data.",
          icon: "error",
          confirmButtonText: "Retry",
        });
        console.error(err);
      });
  };

  return (
    <>
      <Navbar />
      <Information />

      <div className="min-h-screen flex items-center justify-center bg-blue-950">
        <div className="bg-white-800 p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-blue-600 text-4xl font-bold mb-4 text-center">
            Add Interview Details
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-indigo-500">Company Name:</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-indigo-500">Date Applied:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded placeholder-opacity-50"
                placeholder="Select a date"
              />
            </div>
            <div className="mb-4">
              <label className="block text-indigo-500">
                Topics Asked (comma-separated):
              </label>
              <textarea
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter topics separated by commas"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddInterview;
