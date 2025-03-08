import React, { useState, useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PdfResult from "./PdfResult";

const PaperComponent = () => {
  const [formData, setFormData] = useState({
    season: "W",
    year: "2024",
    branch: "BE",     
    subjectCode: "",
  });

  const [pdfUrl, setPdfUrl] = useState("");

  const yearOptions = useMemo(() => {
    const startYear = 2018;
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
  }, []);

  
  const branchCodes = [
    "AF", "BA", "BB", "BC", "BD", "BE", "BESP", "BH", "BI", "BL",
    "BM", "BN", "BP", "BPSP", "BS", "BT", "BV", "CI", "CS", "DA",
    "DB", "DH", "DI", "DISP", "DM", "DP", "DS", "DV", "EP", "FD",
    "HM", "IB", "IC", "IM", "MA", "MB", "MC", "MCSP", "MD", "ME",
    "MH", "ML", "MN", "MP", "MR", "MS", "MT", "MV", "PB", "PD",
    "PH", "PM", "PP", "PR", "TE", "VP"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFetchPDF = () => {
    const { season, year, branch, subjectCode } = formData;

    if (subjectCode.length < 5 || subjectCode.length > 7) {
      toast.error("Subject code must be between 5 and 7 characters!", {
        position: "bottom-right",
        autoClose: 4000,
      });
      return;
    }

    toast.success("Loading...", {
      position: "bottom-right",
      autoClose: 1000,
    });

    const url = `${import.meta.env.VITE_GTU_PAPER_URL}/${season}${year}/${branch}/${subjectCode}.pdf`;
    setPdfUrl(url);
  };

  return (
    <div className="flex md:flex-col h-fit items-center justify-center bg-gray-100 p-6">
      <ToastContainer />

      <div className="lg:flex lg:gap-3 w-full bg-white mt-24 p-4 rounded-lg shadow-lg md:h-fit">
        <div className="lg:w-1/4">
          <h1 className="text-2xl font-bold mb-6">
            Fetch GTU Papers <br />
            <hr />
            <span className="text-sm text-stone-500">
              Only for BE Engineering. Other branches coming soon.
            </span>
          </h1>

          {/* Season Selection */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="season"
            >
              Select Season
            </label>
            <select
              id="season"
              value={formData.season}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="W">Winter</option>
              <option value="S">Summer</option>
            </select>
          </div>

          {/* Year Selection */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="year"
            >
              Select Year
            </label>
            <select
              id="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {yearOptions.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>

          {/* Branch Selection */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="branch"
            >
              Select Branch
            </label>
            <select
              id="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded "
              style={{ color: "black" }}
            >
              {branchCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Code Input */}
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
              value={formData.subjectCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., 3171609"
            />
          </div>

          {/* Fetch Button */}
          <button
            onClick={handleFetchPDF}
            className="w-full bg-blue-600 text-white font-medium p-2 rounded hover:bg-blue-700"
          >
            Fetch PDF
          </button>
        </div>

        {/* PDF Display */}
        <div className="lg:w-3/4">
          {pdfUrl && <PdfResult pdfUrl={pdfUrl} props={{ title: "GTU Paper PDF" }} />}
        </div>
      </div>
    </div>
  );
};

export default PaperComponent;
