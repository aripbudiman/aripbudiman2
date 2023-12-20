import React from 'react'
import Progress from './atoms/Progress'
export default function About() {
    return (
        <div className='about bg-base-100'>
            <div className="left">
                <img src="arip2.png" alt="aripbudiman2.png" />
            </div>
            <div className="right">
                <h1>About me</h1>
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
