import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/Home";
import PaperComponent from "./components/PaperComponent";
import SyllabusComponent from "./components/SyllabusComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileShow from "./components/ProfileShow";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    toast.info("Loading...", { position: "bottom-right", autoClose: 1000 });

    const timer = setTimeout(() => {
      setIsLoading(false);
      toast.success("Loaded successfully!", {
        position: "bottom-right",
        autoClose: 750,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      <ToastContainer />

      <div className="bg-gray-100 h-screen font-[ubuntu]">
        {isLoading ? (
          // Replacing plain text with a better UI for loading state
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/paper" element={<PaperComponent />} />
            <Route path="/syllabus" element={<SyllabusComponent />} />
          </Routes>
        )}
        {/* <div className="flex justify-center">
          <ProfileShow />
        </div> */}

      </div>
    </Router>
  );
}

export default App;
