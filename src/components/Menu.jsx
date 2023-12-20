import React from 'react'
import Link from './atoms/Link'

export default function Menu({ className }) {
    return (
        <ul className={"menu menu-horizontal px-1 " + className}>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Projects</Link>
            <Link>Certificate</Link>
            <Link>Contacts</Link>
        </ul >
    )
}
