import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const PaperComponent = () => {
  const [season, setSeason] = useState("W");
  const [year, setYear] = useState("2023");
  const [subjectCode, setSubjectCode] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false); // New state variable

  const handleFetchPDF = () => {
    if (subjectCode.length < 5 || subjectCode.length > 7) {
      toast.error("Subject code avdto nathi ne avi che exam deva pela joyay to ja bhai", {
        position: "bottom-right",
        timeout: 4000,
      });
    }
    else if (subjectCode) {
      toast.success("Ave che Pdf Rah jo bhai", {
        position: "bottom-right",
        timeout: 1000,
      });
      const url = `${import.meta.env.VITE_GTU_PAPER_URL}/${season}${year}/BE/${subjectCode}.${import.meta.env.VITE_GTU_EXTENSION}`;
      setPdfUrl(url);
    } else {
      toast.error("Gtu Nu server ho apdo code sacho j che bhai", {
        position: "bottom-right",
        timeout: 3000,
      });
    }

    // Set fetching state to true when fetching PDF
    setIsFetching(true);
  };

  const handleInputChange = (e) => {
    const { value, id } = e.target;
    if (id === "subjectCode") {
      setSubjectCode(value);
    } else if (id === "season") {
      setSeason(value);
    } else if (id === "year") {
      setYear(value);
    }
    setIsFetching(false); // Enable the button when input changes
  };

  return (
    <div className="flex flex-col h-fit items-center justify-center bg-gray-100 p-6">
      {/* Toast Container */}
      <ToastContainer />
      
      <div className="bg-white mt-24 p-6 rounded-lg shadow-lg max-w-lg h-fit w-full">
        <h1 className="text-2xl font-bold mb-6">Fetch GTU Papers <br />
        <span className="text-sm text-stone-500">Only For BE(Engineering For now) Other branch coming soon.</span>
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="season"
          >
            Select Season
          </label>
          <select
            id="season"
            value={season}
            onChange={handleInputChange} // Updated to use new handler
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="W">Winter</option>
            <option value="S">Summer</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="year"
          >
            Select Year
          </label>
          <select
            id="year"
            value={year}
            onChange={handleInputChange} // Updated to use new handler
            className="w-full p-2 border border-gray-300 rounded"
          >
            {Array.from({ length: new Date().getFullYear() - 2017 }, (_, i) => (
              <option key={i} value={2018 + i}>
                {2018 + i}
              </option>
            ))}
          </select>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="subjectCode"
            >
              Enter Subject Code
            </label>
            <input
              id="subjectCode"
              type="text"
              value={subjectCode}
              onChange={handleInputChange} // Updated to use new handler
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., 3171609"
            />
          </div>
          <button
            onClick={handleFetchPDF}
            className={`w-full ${isFetching ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium p-2 rounded`}
            disabled={isFetching} // Disable button based on isFetching state
          >
            Fetch PDF
          </button>
        </div>

        {pdfUrl && (
          <div className="mt-6">
            <iframe
              src={pdfUrl}
              className="w-full h-96 border border-gray-300 rounded-lg shadow"
              title="GTU Paper PDF"
            ></iframe>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-600 hover:underline"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaperComponent;
