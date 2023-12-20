import React from 'react'
import SocialMedia from './SocialMedia'
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
        <div className='bg-base-100 home'>
            <div className='home-left'>
                <h2>Hi I am</h2>
                <h1>Muhamad Arip Budiman</h1>
                <h3>Fullstack Web Developer</h3>
                <p>Saya adalah web developer yang cekatan, disiplin dan bertanggung jawab dalam mengurus hal-hal yang berkaitan dengan web dan ilmu komputer lainnya.</p>
                <a href={`https://api.whatsapp.com/send?phone= ${phoneNumber}&text=${encodedMessage} ${description}`} target='_blank' className='btn btn-warning mt-3 w-1/4'>Hire Me</a>
            </div>
            <div className='home-right'>
                <img src="arip.png" alt="aripbudiman.png" />
            </div>
        </div >
    )
}
