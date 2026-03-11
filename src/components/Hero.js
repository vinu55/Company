import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import homeVideo from "../images/home.mp4";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={homeVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay (optional but looks better) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
  <NavBar />

  <div className="flex items-end h-screen px-10 lg:px-20 pb-32">
  <div className="max-w-2xl text-left">

    <h1 className="text-white text-3xl md:text-6xl font-bold mb-6">
      Hi There!
    </h1>

    <p className="text-gray-200 text-xl mb-10">
      We are a team of highly motivated and skilled developers dedicated to delivering only the best software.
    </p>

    <Link
      to="/contact"
      className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-2xl shadow-xl text-lg"
    >
      Learn More
    </Link>

  </div>
</div>
</div>
    </div>
  );
};

export default Hero;