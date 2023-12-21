import React from 'react'
export default function CardService({ children, title, description }) {
    return (
        <div className='card bg-base-200 p-5  hover:shadow-md hover:scale-105'>
            {children}
            <h2 className='card-title mt-5 font-semibold cursor-pointer'>{title}</h2>
            <p className='text-justify cursor-pointer'>{description}</p>
        </div>
    )
}
