import React, { useEffect } from "react";
import SocialMedia from "./SocialMedia";
import { motion, useScroll } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
export default function HomeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const phoneNumber = "+6282117933481";
  var message = "Halo, Selamat";
  var currentTime = new Date().getHours();
  if (currentTime < 12) {
    message += " pagi";
  } else if (currentTime < 15) {
    message += " siang";
  } else if (currentTime < 21) {
    message += " sore";
  } else {
    message += " malam";
  }
  var encodedMessage = encodeURIComponent(message);
  var description = "Muhamad Arip Budiman";
  return (
    <div id="home" className="bg-base-100 home">
      <div className="home-left" data-aos="fade-up">
        <h2>Hi I am</h2>
        <h1>Muhamad Arip Budiman</h1>
        <Profesi />
        <p>
          Saya adalah web developer yang cekatan, disiplin dan bertanggung jawab
          dalam mengurus hal-hal yang berkaitan dengan web dan ilmu komputer
          lainnya.
        </p>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a
            href={`https://api.whatsapp.com/send?phone= ${phoneNumber}&text=${encodedMessage} ${description}`}
            target="_blank"
            className="btn btn-warning mt-3 xl:w-1/4 w-1/3"
          >
            Hire Me
          </a>
        </motion.div>
        <div className="my-7 max-w-full">
          <SocialMedia />
        </div>
      </div>
      <div className="home-right" data-aos="fade-up">
        <img src="arip.png" alt="aripbudiman.png" />
      </div>
      <div
        className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          Style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
    </div>
  );
}
const Profesi = () => {
  return (
    <TypeAnimation
      sequence={[
        "Fullstack Web Developer",
        1000,
        "Freelancer",
        1000,
        "Part Time Developer",
        1000,
      ]}
      speed={20}
      className="lg:text-4xl text-2xl font-bold font-hammersmith text-washedBlack"
      repeat={Infinity}
    />
  );
};
