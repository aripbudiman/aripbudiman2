import React from 'react'
import { Icon } from '@iconify/react';

import CardService from './atoms/CardService';
export default function Services() {
    return (
        <div id='services' className='bg-base-100'>
            <h1>Services</h1>
            <p className='px-5 xl:px-0'>Jelajahi berbagai layanan yang saya tawarkan untuk memenuhi kebutuhan anda. Tujuan saya adalah memberikan solusi yang tidak hanya memenuhi ekpektasi namun juga melampauinya. Berikut beberapa layanan yang menjadi spesialis saya:</p>
            <div className='grid grid-cols-1 px-5 xl:grid-cols-4 gap-8 py-5'>
                <CardService title="UI/UX" description="Berpengalaman dalam pembuatan UI/UX di mamo app">
                    <Icon className='text-7xl mt-8 text-accent' icon="carbon:ibm-z-os-ai-control-interface" />
                </CardService>
                <CardService title="Web Development" description="Berpengalaman dalam pembuatan website dan web app perusahaan">
                    <Icon className='text-7xl mt-8 text-accent' icon="streamline:code-monitor-1" />
                </CardService>
                <CardService title="Data Analytics" description="Pengolah data dan pembuatan  visualisasi data SQL dan Excel">
                    <Icon className='text-7xl mt-8 text-accent' icon="gridicons:stats-alt" />
                </CardService>
                <CardService title="Commingsoon" description="Commingsoon">
                    <Icon className='text-7xl mt-8 text-accent' icon="zondicons:mobile-devices" />
                </CardService>
            </div>
        </div>
    )
}
