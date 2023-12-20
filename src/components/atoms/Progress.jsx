import React from 'react'

export default function Progress({ label, value }) {
    return (
        <div>
            <label className='block font-medium' htmlFor="progress">{label}</label>
            <progress className="progress progress-warning w-80" value={value} max="100"></progress>
        </div>
    )
}
