import React from "react";
import DownloadLinks from "./DownloadLinks"; // Assuming DownloadLinks is in the same directory

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen w-full bg-gray-100">
      {/* Left Section: Text */}
      <div className="flex-1 p-8 md:p-16 mt-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to GTU Downloader
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Prepare for your exam by directly downloading the syllabus and
          previous year question papers.
        </p>
        <p className=" text-center text-gray-400 mt-4">
          * This is not the official site of GTU. We hold no grudges or ill
          feelings towards GTU... except maybe for a few sleepless nights before
          exams. 😉 <br/>But hey, no hard feelings! We're here to help (and have a
          little fun). Thank you!
        <DownloadLinks />
        </p>

      </div>
      {/* Right Section: Image */}
      <div className="flex-1 p-8 md:p-16">
        <img
          loading="lazy"
          src="https://media.licdn.com/dms/image/D4D12AQHfkAi_L0DUzw/article-cover_image-shrink_600_2000/0/1687082625543?e=2147483647&v=beta&t=oWPvVHioG0Mqt1Qtk8YREtHM3Q30SieJu7qibJlPdHw"
          alt="Gtu Image"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
