import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "remixicon/fonts/remixicon.css";
// import myVidio from "../public/assets/vidio/header.mp4";
import myVidio2 from "../public/assets/vidio/short.mp4";
import myVidio3 from "../public/assets/vidio/hero.mp4";
import myVidio4 from "../public/assets/vidio/c-vidio.mp4";
import "./App.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoverText, setIsHoverText] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        position={position}
        setIsHoverText={setIsHoverText}
      />
      <div className="mt-20 mx-28 sm:text-7xl md:text-9xl text-4xl w-3/5 tracking-tighter h-[500px]">
        We are a digital
        <span className="inline-block align-middle relative mx-3">
          <video
            autoPlay
            loop
            muted
            src={myVidio3}
            className="rounded-full sm:h-14 md:h-28 h-12 lg:h-30 relative top-1/2 -translate-y-3/2"
          />
        </span>
        <span className="font-light italic">design</span> and motion agency
      </div>

      {/* section-2 vidio */}
      <div
        className="h-full"
        onMouseEnter={() => setIsHoveringVideo(true)}
        onMouseLeave={() => setIsHoveringVideo(false)}
      >
        {" "}
        <video autoPlay loop muted src={myVidio2} className="w-full"></video>
      </div>

      {/* section-3  */}
      <div className="flex items-center justify-center min-h-screen bg-white p-10 gap-32 ml-0 md:ml-48 max-w-full">
        <div className="w-0 md:w-1/2 lg:w-1/3 flex justify-center">
          <video autoPlay loop muted src={myVidio4}></video>
        </div>
        <div className="w-full md:w-2/3 space-y-8">
          <p className="sm:text-4xl text-2xl max-w-lg">
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>
          <button
            className="relative px-16 py-10 md:px-28 md:py-16 text-2xl font-medium border border-black rounded-full overflow-hidden group"
            onMouseEnter={() => setIsHoveringButton(true)}
            onMouseLeave={() => setIsHoveringButton(false)}
          >
            <span className="absolute inset-0 bg-black rounded-full scale-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-100"></span>
            <span className="relative text-black transition-colors duration-500 group-hover:text-white">
              What we do
            </span>
          </button>
        </div>
      </div>

      {/* section-footer  */}

      {/* Custom Cursor
      <div
        className={`fixed z-20 top-0 left-0 pointer-events-none transition-ease-in-out duration-300 ease-out flex items-center justify-center 
          ${
            isHoveringVideo
              ? "w-20 h-20 bg-white rounded-full border"
              : isHoveringButton
              ? "w-6 h-6 bg-gray-200 rounded-full"
              : "w-2 h-2 bg-gray-800 rounded-full"
          }`}
        style={{
          transform: `translate(${
            position.x - (isHoveringVideo ? 40 : isHoveringButton ? 8 : 4)
          }px, ${
            position.y - (isHoveringVideo ? 40 : isHoveringButton ? 8 : 4)
          }px)`,
        }}
      >
        {isHoveringVideo && <i className="ri-play-large-line text-2xl"></i>}
      </div> */}
      {/* Custom Cursor */}
      <div
        className={`fixed z-20 top-0 left-0 pointer-events-none transition-all duration-300 ease-out flex items-center justify-center 
    ${
      isHoveringVideo
        ? "w-20 h-20 bg-white rounded-full border"
        : isHoveringButton
        ? "w-6 h-6 bg-gray-200 rounded-full"
        : isHoverText
        ? "w-10 h-10 bg-gray-800 rounded-full"
        : "w-2 h-2 bg-gray-800 rounded-full"
    }`}
        style={{
          transform: `translate(${
            position.x -
            (isHoveringVideo ? 40 : isHoveringButton ? 8 : isHoverText ? 12 : 4)
          }px, ${
            position.y -
            (isHoveringVideo ? 40 : isHoveringButton ? 8 : isHoverText ? 12 : 4)
          }px)`,
        }}
      >
        {isHoveringVideo && <i className="ri-play-large-line text-2xl"></i>}
      </div>
    </>
  );
};

export default App;

