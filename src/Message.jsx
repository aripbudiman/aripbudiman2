import React, { useState, useEffect } from 'react'

export default function Message() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://aripbudiman-default-rtdb.firebaseio.com/contacts.json')
            .then(res => res.json())
            .then(data => setData(Object.entries(data)))
    }, [])
    console.log(data)
    return (
        <div className='bg-gray-100'>
            <div className='max-w-xl mx-auto bg-base-100 p-5'>
                <h1 className='text-3xl font-semibold'>New Message</h1>
                <div className='mt-10'>
                    {data.map((item, index) => (
                        <div key={index} className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src="https://imgs.search.brave.com/d4KKTxZB4MYNIND8xG1VbdIFwrgcmAcFEJrw28JVG7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS9wcm9kdWN0/X3BhZ2VzLzE4OS1o/ZXJvLmpwZz89MTcw/MjQzMzQ5NA" />
                                </div>
                            </div>
                            <div className="chat-header first-letter:uppercase">
                                {item[1].fullname}
                                <time className="text-xs opacity-50 ml-2">{item[1].created_at}</time>
                            </div>
                            <div className="chat-bubble"><span className='font-semibold mr-3 block'>Subject: {item[1].subject}</span>{item[1].message}</div>
                            <div className="chat-footer opacity-50">
                                Delivered
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
