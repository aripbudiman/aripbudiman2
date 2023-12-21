import React from 'react'
import Link from './atoms/Link'

export default function Menu({ className }) {
    return (
        <ul className={"menu menu-horizontal px-1 " + className}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#certificate">Certificate</Link>
            <Link href="#contacts">Contacts</Link>
        </ul >
    )
}
