import React from 'react'
import { Icon } from '@iconify/react';

export default function Contacts() {
    return (
        <div id='contacts' className='bg-base-100'>
            <h1 className='text-center text-4xl font-semibold py-10'>Contacts</h1>
            <div className='m-5 grid grid-cols-1 xl:grid-cols-2'>
                <div className='p-5 bg-gray-200'>
                    <h1 className='text-3xl font-semibold text-gray-800 mb-5'>Contact Us</h1>
                    <div className='grid  grid-cols-2 gap-x-5'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-semibold">FULL NAME</span>
                            </div>
                            <input type="text" placeholder="Full name" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-semibold">EMAIL</span>
                            </div>
                            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">SUBJECT</span>
                        </div>
                        <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold">MESSAGE</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-32" placeholder="Message"></textarea>
                    </label>
                    <button className='btn btn-primary mt-5 w-1/3'>Send Message</button>
                </div>
                <GoogleMap />
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-4 my-10 gap-5 px-5'>
                <div className='flex justify-start flex-col items-center gap-y-4'>
                    <Icon className='btn btn-circle btn-primary p-2' icon="ic:baseline-place" />
                    <p className='text-justify'>Jl. Raya Simpang - Samarang, Mulyasari, Kec. Bayongbong, Kabupaten Garut, Jawa Barat 44162</p>
                </div>
                <div className='flex justify-start flex-col items-center gap-y-4'>
                    <Icon className='btn btn-circle btn-primary p-2' icon="bi:telephone-fill" />
                    <p>+62 821 1793 3481</p>
                </div>
                <div className='flex justify-start flex-col items-center gap-y-4'>
                    <Icon className='btn btn-circle btn-primary p-2' icon="mingcute:telegram-fill" />
                    <p><a href="mailto:muhamadarifbudiman22@gmail.com">muhamadarifbudiman22@gmail.com</a></p>
                </div>
                <div className='flex justify-start flex-col items-center gap-y-4'>
                    <Icon className='btn btn-circle btn-primary p-2' icon="mdi:web" />
                    <p><a href="http://aripbudiman.com" target="_blank" rel="noopener noreferrer">aripbudiman.com</a></p>
                </div>
            </div>
        </div>
    )
}

const GoogleMap = () => {
    return (
        <div>
            <iframe className='xl:h-full h-64 w-full'
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1176.6604282655676!2d107.8188789556241!3d-7.263798813414988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1704195969073!5m2!1sen!2sid"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
