import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewInterviews = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/interviews")
      .then((response) => {
        setInterviews(response.data);
      })
      .catch((err) => {
        console.error(err);
        // Optionally, you can show an error message to the user here
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-blue-950">
        <div className="bg-blue-950 p-8 rounded shadow-md w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-4 text-teal-500 text-center justify-center">
            Interview Details
          </h1>
          {interviews.length > 0 ? (
            interviews.map((interview, index) => (
              <div
                key={index}
                className="mb-4 p-4 border rounded bg-teal-950 text-white"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Company: {interview.companyName}
                </h3>
                <p className="text-gray-300 mb-2">
                  Date: {new Date(interview.date).toLocaleDateString()}
                </p>
                <div>
                  <h4 className="text-lg font-semibold">Topics:</h4>
                  <ol className="list-decimal list-inside ml-6">
                    {interview.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No interviews available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewInterviews;
