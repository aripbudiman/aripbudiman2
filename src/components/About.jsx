import React, { useEffect } from "react";
import Progress from "./atoms/Progress";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="about" className="about bg-base-100 relative">
      <div className="left" data-aos="fade-down">
        <img src="arip2.png" alt="aripbudiman2.png" />
      </div>
      <div className="right" data-aos="fade-up">
        <h1>About Me</h1>
        <p className="mb-3">Berikut beberapa skill yang dimiliki:</p>
        <Progress value={78} label="Javascript" />
        <Progress value={85} label="PHP" />
        <Progress value={85} label="Laravel" />
        <Progress value={80} label="Codeigniter 4" />
        <Progress value={60} label="React JS" />
        <Progress value={88} label="Microsoft Office" />
        <Progress value={80} label="Adobe Photoshop & XD" />
      </div>
      <div
        className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
          Style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
    </div>
  );
}
