import React from 'react';
import { useNavigate } from 'react-router-dom';

const DownloadLinks = () => {
  const navigate = useNavigate();

  const handleDownload = (path) => {
    // In a real application, you would handle the file download here
    // For demonstration, we'll just navigate to the path
    navigate(path);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleDownload('/paper')}
        className="btn text-blue-700 hover:underline"
      >
        Download Paper
      </button>
      <span>|</span>
      <button
        onClick={() => handleDownload('/syllabus')}
        className="btn text-blue-700 hover:underline"
      >
        Download Syllabus
      </button>
    </div>
  );
};

export default DownloadLinks;