import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function CardProject({ children, src }) {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    return (
        <div data-aos="zoom-in" className="card bg-base-200 hover:shadow-lg p-1">
            <figure>
                <img className='h-52 object-scale-down' src={src} alt="project" />
            </figure>
            <div className="card-body">
                <Title />
                {children}
            </div>
        </div>
    )
}

const Title = ({ children }) => {
    return (
        <h2 className="card-title text-error">{children}</h2>
    )
}
CardProject.Title = Title

export { Title }