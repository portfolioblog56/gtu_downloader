import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PdfResult from "./PdfResult";

const SyllabusComponent = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleChange = (e) => setSubjectCode(e.target.value);

  const handleFetchPDF = () => {
    if (subjectCode.length < 5 || subjectCode.length > 7) {
      toast.error("Invalid subject code! Please check before proceeding.", { position: "bottom-right", autoClose: 4000 });
      return;
    }

    toast.success("Fetching syllabus PDF...", { position: "bottom-right", autoClose: 1000 });

    const url = `${import.meta.env.VITE_GTU_SYLLABUS_URL}/${subjectCode}.pdf`;
    setPdfUrl(url);
  };

  return (
    <div className="flex md:flex-col h-fit items-center justify-center bg-gray-100 p-6">
      <ToastContainer />

      <div className="lg:flex lg:gap-3 w-full bg-white mt-24 p-4 rounded-lg shadow-lg md:h-fit">
        <div className="lg:w-1/4">
          <h1 className="text-2xl font-bold mb-6">
            Fetch GTU Syllabus<br />
            <hr />
            <span className="text-sm text-stone-500"> (For all Branches)</span>
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="subjectCode">
              Enter Subject Code 
            </label>
            <input
              id="subjectCode"
              type="text"
              value={subjectCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
              placeholder="e.g., 3171609"
            />
          </div>

          <button
            onClick={handleFetchPDF}
            className="w-full bg-blue-600 text-white font-medium p-2 rounded hover:bg-blue-700 transition"
          >
            Fetch PDF
          </button>
        </div>

        {/* PDF Display */}
        <div className="lg:w-3/4">
          {pdfUrl && (
            <PdfResult pdfUrl={pdfUrl} props={{ title: "GTU Syllabus PDF" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabusComponent;
