import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logow.png';
import { Button } from "../../components/Button";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false); // State to toggle the menu

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="flex py-6 px-5 md:px-6 lg:px-10 text-xl" >
                <div className="flex-start my-auto">
                    <Button title={showMenu ? <AiOutlineClose /> : <FiMenu />} onclick={toggleMenu} />
                </div>
                <div className="mx-auto">
                    <Link to='/homepage' className=''>
                        <img className="h-10" src={logo} alt="salva logo" srcset="" />
                    </Link>
                </div>
            </div>
            {showMenu &&
                <div className='absolute top-22 left-0 h-full w-3/4 md:w-1/2 z-50 px-10 bg-primary text-xl'>
                    <div className='hover:text-button my-5'>
                        <Link to='/profile'>Profile</Link>
                    </div>
                    <div className='hover:text-button'>
                        <Link to='/contact'>Emergency Contacts</Link>
                    </div>
                    <div className='hover:text-button my-5'>
                        <Link to='/settings'>Settings</Link>
                    </div>
                    <div className='hover:text-button my-5'>
                        <Link to='/faqs'>FAQ</Link>
                    </div>
                    <div className='hover:text-button'>
                        <Link to='/signup'>Log Out</Link>
                    </div>
                </div >
            }
        </>
    )
}