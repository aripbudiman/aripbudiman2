import React from 'react'

export default function CardProject({ children, src }) {
    return (
        <div className="card bg-base-200 hover:shadow-lg p-1">
            <figure>
                <img className='h-56 object-scale-down' src={src} alt="project" />
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