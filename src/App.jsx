import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeComponent from './components/Home';
import PaperComponent from './components/PaperComponent';
import SyllabusComponent from './components/SyllabusComponent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MidPaper from './components/MidPaper';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    toast.info('Loading...', {
      position: 'bottom-right',
      autoClose: 1000, 
    });

    const timer = setTimeout(() => {
      setIsLoading(false); 
      toast.success('Loaded successfully!', {
        position: 'bottom-right',
        autoClose: 750, 
      });
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <Router>
<SpeedInsights/>
      <Navbar />
      <Fragment className="overflow-hidden">
        <div className="p-2 mt-4">
          
          <ToastContainer />

          {isLoading ? (
              <p className="text-lg font-medium mt-4">Loading...</p>
          ) : (
            // Once loaded, render the Routes
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/paper" element={<PaperComponent />} />
              <Route path="/syllabus" element={<SyllabusComponent />} />
              <Route path="/mid" element={<MidPaper />} />
            </Routes>
          )}
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
