import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-30 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-10 text-lg w-1/2">{overview}</p>
      <div className="flex gap-4">
        <button className=" bg-white text-black px-8 py-3 rounded-md font-bold text-lg hover:bg-opacity-80 transition">
          <span className="mr-2">▶</span> Play
        </button>
        <button className="flex items-center justify-center bg-gray-500 bg-opacity-50 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-opacity-40 transition">
          <span className="mr-2">ⓘ</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
