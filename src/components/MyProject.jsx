import React from 'react'
import CardProject, { Title } from './atoms/CardProject'
export default function MyProject() {
    return (
        <div id='projects' className='bg-base-100'>
            <h1 className='text-4xl font-semibold text-center mb-5'>My Project</h1>
            <p className='text-center text-lg mb-5'>Beberapa project yang pernah saya buat dan saya jual ke beberapa client. Berikut projectnya:</p>
            <div className='grid grid-cols-3 gap-8 pt-5 pb-14'>
                <CardProject src="/project/dmp1.png">
                    <CardProject.Title>DMPrinting</CardProject.Title>
                    <p className='text-justify'>Project yg saya buat menggunakan CI4, aplikasi ini mengelola pemesanan dan transaksi digital printing. masih beroperasi oleh perusahan DMPRINTING.</p>
                </CardProject>
                <CardProject src="/project/mobile.png">
                    <CardProject.Title>Mamo App (Management Keuangan)</CardProject.Title>
                    <p className='text-justify'>Project yang saya buat sekaligus design sendiri menggunakan Adobe XD dan Laravel sebagai Backend nya.</p>
                </CardProject>
                <CardProject src="/project/sparepart1.png">
                    <CardProject.Title>Jual Beli Sparepart Motor</CardProject.Title>
                    <p className='text-justify'>Project jual beli sparepart motor, salah satu client yg saya dapet dari FB.</p>
                </CardProject>
                <CardProject src="/project/pandakoding.png">
                    <CardProject.Title>Pandakoding.com (website dokumentasi dan tutorial)</CardProject.Title>
                    <p className='text-justify'>Website untuk menyediakan dokumentasi dan tutorial. ditujukan untuk menyimpan tutorial dan dokumentasi code. Namun belum saya deploy dikarenakan masa aktif servernya habis.</p>
                </CardProject>
                <CardProject src="/project/ecatalog.png">
                    <CardProject.Title>E-Catalog (Midtrans)</CardProject.Title>
                    <p className='text-justify'>E-Catalog ini sudah terintegrasi dengan Midtrans sebagai payment gateway bisa juga cash.</p>
                </CardProject>
                <CardProject src="/project/pos.png">
                    <CardProject.Title>POS (Point Of Sales)</CardProject.Title>
                    <p className='text-justify'>POS ini menggunakan Laravel Inertia, dan berikut saya udah buatkan juga Doc OPEN API nya <a className='text-primary' href="https://openapi.aripbudiman.com/" target="_blank" rel="noopener noreferrer">https://openapi.aripbudiman.com/</a> yang saya buat sendiri</p>
                </CardProject>
            </div>
        </div>
    )
}
