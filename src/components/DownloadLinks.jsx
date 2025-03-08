import React from 'react';
import { useNavigate } from 'react-router-dom';

const DownloadLinks = () => {
  const navigate = useNavigate();
  const handleDownload = (path) => {
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