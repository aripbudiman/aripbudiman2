import React from 'react'
import Menu from './Menu'
export default function Navbar() {
    const handleDownloadClick = () => {
        const imageUrl = "/cv.jpg"; // Path to the image
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "cv-aripbudiman.jpg"; // Nama file yang akan diunduh
        link.click();
    };

    return (
        <div className="navbar max-w-5xl mx-auto border-b sticky z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <Menu className={"menu-sm dropdown-content mt-10 z-[1] p-2 shadow bg-base-100 rounded-box w-32"} />
                </div>
                <a href='' className="text-xl font-extrabold text-slate-800">Arip Budiman</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <Menu className="menu-horizontal px-1" />
            </div>
            <div className="navbar-end">
                <button onClick={handleDownloadClick} className="btn">Download CV</button>
            </div>
        </div>
    )
}
