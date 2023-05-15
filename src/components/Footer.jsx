import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='border-t border-paragraph p-8 md:p-10 flex justify-between md:justify-evenly md:text-xl font-thin'>
            <div className='flex flex-col md:flex-row md:gap-20'>
                <div>
                    <div className='text-xl md:text-2xl font-normal text-button'>Salva</div>
                    <div>Saving lives..</div>
                    <div className='flex mt-4 gap-6'>
                        <Link className='text-button hover:text-white'>
                            <FaTwitter />
                        </Link>
                        <Link className='text-button hover:text-white'>
                            <FaFacebookF />
                        </Link>
                        <Link className='text-button hover:text-white'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex text-button hover:text-white my-4'><FaPhone /> <span className='text-white mx-2 -mt-1'>+2348112998262</span></div>
                    <div className='flex text-button hover:text-white'><FaEnvelope /> <span className='text-white mx-2 -mt-1'>desalva@gmail.com</span></div>
                </div>
            </div>
            <div>
                <h1 className='text-xl md:text-2xl font-normal text-button'>Company</h1>
                <div className='flex flex-col'>
                    <Link className='text-white hover:text-button' to='/about' >About Us</Link>
                    <Link className='text-white hover:text-button' to='/jobs' >Careers</Link>
                    <Link className='text-white hover:text-button' to='/homepage' >Blog</Link>
                    <Link className='text-white hover:text-button' to='/newsletter' >Newsletter</Link>
                </div>
            </div>
        </div>
    )
}
