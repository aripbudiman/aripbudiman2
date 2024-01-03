import React, { useEffect } from 'react'
import { motion, useScroll } from "framer-motion"

export default function SocialMedia() {
    const phoneNumber = '082117933481';
    var message = 'Halo, Selamat';
    var currentTime = new Date().getHours();
    if (currentTime < 12) {
        message += ' pagi';
    } else if (currentTime < 15) {
        message += ' siang';
    } else if (currentTime < 21) {
        message += ' sore';
    } else {
        message += ' malam';
    }
    var encodedMessage = encodeURIComponent(message);
    var description = 'Muhamad Arip Budiman';

    useEffect(() => {

    }, []);
    return (
        <div className='box flex xl:justify-arround justify-center flex-wrap gap-4 xl:gap-x-5 max-w-xs xl:max-w-full'>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <a href='https://www.facebook.com/arif.hernandesz' target='_blank' className='btn btn-sm xl:btn-md btn-circle bg-base-300'><i className="xl:text-2xl text-xl fa-brands fa-facebook"></i></a>
            </motion.div>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <a href='https://www.instagram.com/aripbudiman22' target='_blank' className='btn xl:btn-md btn-sm btn-circle bg-base-300'><i className="xl:text-2xl text-xl fa-brands fa-instagram"></i></a>
            </motion.div>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <a href='https://www.linkedin.com/in/muhamad-arip-budiman-gcoding/' target='_blank' className='btn xl:btn-md btn-sm btn-circle bg-base-300'><i className="xl:text-2xl text-xl fa-brands fa-linkedin"></i></a>
            </motion.div>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <a href={`https://api.whatsapp.com/send?phone= ${phoneNumber}&text=${encodedMessage} ${description}`} target='_blank' className='btn xl:btn-md btn-sm btn-circle bg-base-300'><i className="xl:text-2xl text-xl fa-brands fa-whatsapp"></i></a>
            </motion.div>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <a href='https://t.me/urilll22' target='_blank' className='btn xl:btn-md btn-sm btn-circle bg-base-300'><i className="xl:text-2xl text-xl fa-brands fa-telegram"></i></a>
            </motion.div>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <a href='https://discord.com/channels/1137601688686051379/1137601689201938614' target='_blank' className='btn xl:btn-md btn-sm btn-circle bg-base-300'><i className="xl:text-2xl text-xl fa-brands fa-discord"></i></a>
            </motion.div>
        </div >
    )
}
