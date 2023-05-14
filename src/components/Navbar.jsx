import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logow.png';
import { Button } from "./Button";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai"

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false); // State to toggle the menu
    const [bgColor, setBgColor] = useState('')

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setBgColor('bg-primary');
            } else {
                setBgColor('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>                
            <div className={`flex flex-row justify-between py-6 px-10 md:px-6 lg:px-10 border-b border-paragraph md:border-0 place-items-center text-xl md:sticky md:top-0 md:left-0 md:right-0 ${bgColor}`} >
                <div>
                    <Link to='/' className=''>
                        <img className="h-10" src={logo} alt="salva logo" srcset="" />
                    </Link>
                </div>
                <div className="md:hidden">
                    <Button title={showMenu ? <AiOutlineClose /> :  <FiMenu />}onclick={toggleMenu} />
                </div>
                <div className='md:flex lg:gap-6 md:gap-4 hidden items-center'>
                <div>
                        <Link to='/' className='hover:text-button'>Home</Link>
                    </div>
                    <div>
                        <Link to='/about' className='hover:text-button'>About Us</Link>
                    </div>
                    <div>
                        <Link to='/faqs' className='hover:text-button'>FAQs</Link>
                    </div>
                </div>
                <div className='md:block hidden'>
                    <div>
                        <Link to='/signup' className='border border-button hover:bg-transparent rounded-lg px-6 py-2 bg-button'>Get Started</Link>
                    </div>
                </div>
            </div>
            {showMenu &&
                <div className='md:hidden absolute top-22 right-0 h-full w-3/4 z-50 px-10 bg-primary text-xl'>
                     <div className='hover:text-button my-5'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='hover:text-button'>
                        <Link to='/about'>About Us</Link>
                    </div>
                    <div className='hover:text-button my-5'>
                        <Link to='/faqs'>FAQs</Link>
                    </div>
                    <div className='hover:text-button'>
                    </div>
                    <div className='hover:text-button'>
                        <Link to='/signup'>Get Started</Link>
                    </div>
                </div >
            }
        </>
    )
}