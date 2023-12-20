import React from 'react'

export default function Link({ ...props }) {
    return (
        <li className='block'><a href={props.href}>{props.children}</a></li>
    )
}
