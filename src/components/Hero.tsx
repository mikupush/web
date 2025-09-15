import React from 'react';
import myImage from '../assets/mikufondo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center p-8 md:p-16 bg-bg-air overflow-hidden">
      
      <div className="absolute inset-0 -z-1 pointer-events-none">
        
        <svg className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] opacity-60 animate-blob" viewBox="0 0 200 200">
          <path
            fill="#a9d89b"
            d="M50,-60C65,-45,75,-22,73,-1C71,20,56,39,39,52C22,65,2,72,-15,66C-32,59,-46,39,-56,18C-66,-2,-71,-24,-62,-42C-52,-60,-29,-74,-6,-74C17,-74,34,-60,50,-60Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative flex-1 flex justify-center items-center z-10">
        <svg className="absolute w-[1400px] h-[900px] opacity-60 -z-10 animate-blob" viewBox="0 0 200 200">
          <path
            fill="#c7e9d6"
            d="M45,-58C60,-44,72,-27,71,-10C70,7,56,23,42,36C28,48,14,58,-4,60C-22,62,-45,57,-56,42C-67,27,-65,3,-60,-18C-55,-39,-47,-58,-33,-70C-18,-82,2,-87,17,-78C32,-69,43,-56,45,-58Z"
            transform="translate(100 100)"
          />
        </svg>

        <img
          src={myImage.src}
          alt="Anime Girl Illustration"
          className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-md transition-transform duration-300 lg:scale-105"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-7xl font-bold text-teal-text">
          Mikupush <br />
          <span className="text-aqua-primary">Send Files Fast</span>
        </h1>
        <p className="mt-4 text-gray-text">
          Send large files instantly and securely with our simple and beautiful interface.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="px-6 py-3 bg-aqua-primary text-white rounded-full shadow-lg hover:bg-aqua-hover transition duration-300">
            Download
          </button>
          <a href="#features" className="px-6 py-3 border border-aqua-primary text-aqua-primary rounded-full hover:bg-white transition duration-300">
            Get Started
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
