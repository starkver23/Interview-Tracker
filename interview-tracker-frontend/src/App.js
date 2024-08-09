import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddInterview from "./component/AddInterview";
import ViewInterviews from "./component/ViewInterviews";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AddInterview />} />
          <Route path="/view-interviews" element={<ViewInterviews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
