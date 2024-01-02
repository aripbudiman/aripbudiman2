import React from 'react'
import SocialMedia from './SocialMedia'
export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <h1 className='text-3xl text-center font-bold inline-block'><span className='text-warning bg-base-100 px-2 cursor-pointer hover:scale-125'>A</span>rip Budiman</h1>
            <nav className="grid grid-flow-col gap-4">
                <a href='#home' className="link link-hover">Home</a>
                <a href='#about' className="link link-hover">About</a>
                <a href='#services' className="link link-hover">Services</a>
                <a href='#project' className="link link-hover">Project</a>
                <a href='#certificate' className="link link-hover">Certificate</a>
                <a href='#contacts' className="link link-hover">Contacts</a>
            </nav>
            <nav>
                <SocialMedia />
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by Arip Budiman</p>
            </aside>
        </footer>
    )
}
