import React, { useEffect } from 'react'
import Progress from './atoms/Progress'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <div id='about' className='about bg-base-100'>
            <div className="left" data-aos="fade-right">
                <img src="arip2.png" alt="aripbudiman2.png" />
            </div>
            <div className="right" data-aos="fade-left">
                <h1>About Me</h1>
                <p className='mb-3'>Berikut beberapa skill yang dimiliki:</p>
                <Progress value={78} label="Javascript" />
                <Progress value={85} label="PHP" />
                <Progress value={85} label="Laravel" />
                <Progress value={80} label="Codeigniter 4" />
                <Progress value={60} label="React JS" />
                <Progress value={88} label="Microsoft Office" />
                <Progress value={80} label="Adobe Photoshop & XD" />
            </div>
        </div>
    )
}
