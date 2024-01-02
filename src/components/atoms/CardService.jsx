import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function CardService({ children, title, description }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 500
        });
    }, []);
    return (
        <div data-aos="zoom-in" className='card bg-base-200 p-5  hover:shadow-md hover:scale-105'>
            {children}
            <h2 className='card-title mt-5 font-semibold cursor-pointer'>{title}</h2>
            <p className='text-justify cursor-pointer'>{description}</p>
        </div>
    )
}
