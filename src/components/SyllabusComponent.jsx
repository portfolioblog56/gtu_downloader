import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
const SyllabusComponent = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleFetchPDF = () => {
    if (subjectCode.length < 5 || subjectCode.length > 7) {
      toast.error("Subject code avdto nathi ne avi che exam deva pela joyay to ja bhai", {
        position: "bottom-right",
        timeout: 6000,
      });
    }
    else if (subjectCode) {
      toast.success("Ave che Pdf Rah jo bhai", {
        position: "bottom-right",
        timeout: 1000,
      });
      const url = `https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/${subjectCode}.pdf`;
      setPdfUrl(url);
    } else {
      toast.error("Gtu Nu server ho apdo code sacho j che bhai", {
        position: "bottom-right",
        timeout: 3000,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 h-fit p-6">
     <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mt-24 h-fit w-full">
         <h1 className="text-2xl font-bold mb-6">Fetch GTU Syllabus 
         <span className="text-sm text-stone-500">(For all Branch)</span>
         </h1>
         
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="subjectCode">
            Enter Subject Code
          </label>
          <input
            id="subjectCode"
            type="text"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., 3171609"
          />
        </div>
        <button
          onClick={handleFetchPDF}
          className="w-full bg-blue-600 text-white font-medium p-2 rounded hover:bg-blue-700"
        >
          Fetch PDF
        </button>
      

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

export default SyllabusComponent;
