import React from 'react'
import SocialMedia from './SocialMedia'
import { motion, useScroll } from "framer-motion"
import { TypeAnimation } from "react-type-animation";
export default function HomeSection() {
    const phoneNumber = '082117933481';
    var message = 'Halo, Selamat';
    var currentTime = new Date().getHours();
    if (currentTime < 12) {
        message += ' pagi';
    } else if (currentTime < 15) {
        message += ' siang';
    } else if (currentTime < 21) {
        message += ' sore';
    } else {
        message += ' malam';
    }
    var encodedMessage = encodeURIComponent(message);
    var description = 'Muhamad Arip Budiman';
    return (
        <div id='home' className='bg-base-100 home'>
            <div className='home-left'>
                <h2>Hi I am</h2>
                <h1>Muhamad Arip Budiman</h1>
                <Profesi />
                <p>Saya adalah web developer yang cekatan, disiplin dan bertanggung jawab dalam mengurus hal-hal yang berkaitan dengan web dan ilmu komputer lainnya.</p>
                <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <a href={`https://api.whatsapp.com/send?phone= ${phoneNumber}&text=${encodedMessage} ${description}`} target='_blank' className='btn btn-warning mt-3 w-1/4'>Hire Me</a>
                </motion.div>
                <div className='my-7 w-1/2'>
                    <SocialMedia />
                </div>
            </div>
            <div className='home-right'>
                <img src="arip.png" alt="aripbudiman.png" />
            </div>
        </div >
    )
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