import React from 'react'
import Menu from './Menu'
export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <Menu className={"menu-sm dropdown-content mt-10 z-[1] p-2 shadow bg-base-100 rounded-box w-32"} />
                </div>
                <a href='' className="text-xl font-extrabold">Arip Budiman</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <Menu />
            </div>
            <div className="navbar-end">
                <a className="btn">Download CV</a>
            </div>
        </div>
    )
}
