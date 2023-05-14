import React from 'react'
import { Layout } from '../components/Layout'
import join from '../assets/Sign up-bro2.png'
import { Button } from '../components/Button'
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const Signup = () => {
    return (
        <>
            <Layout>
                <div className='Home text-center flex flex-col md:flex-row py-10'>
                    <div className='md:w-1/2 px-10 place-items-center flex'>
                        <img src={join} alt="" srcset="" />
                    </div>
                    <div className='flex flex-col md:w-1/2 px-10 py-10 gap-6'>
                        <div className='flex flex-col gap-6 md:flex-row'>
                            <input className='p-4 md:mr-2 w-full border-2 border-primary text-primary rounded-lg' type="text" placeholder="First Name" name="" id="" />
                            <input className='p-4 md:ml-2 w-full border-2 border-primary text-primary rounded-lg' type="text" placeholder="Last Name" name="" id="" />
                        </div>
                        <input className='p-4 border-2 border-primary text-primary rounded-lg' type="text" placeholder="Username" name="" id="" />
                        <input className='p-4 border-2 border-primary text-primary rounded-lg' type="email" placeholder="Email address" name="" id="" />
                        <input className='p-4 border-2 border-primary text-primary rounded-lg' type="password" placeholder="Password" name="" id="" />
                        <input className='p-4 border-2 border-primary text-primary rounded-lg' type="password" placeholder="Confirm password" name="" id="" />
                        <Button title="Sign Up" btnstyles="py-3 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button hover:text-white mt-4" />
                        <div className="text-center mt-4">
                        <div className='border-b border-paragraph -mb-3'></div>
                        <div className='bg-gradient-to-l from-[#272d4c] to-[#2a3051] px-2 inline-block'>Or Sign Up using</div>
                    </div>
                        <div className='flex justify-center gap-4'>
                            <Button title={<FaGoogle/>} btnstyles="py-3 rounded-full text-button hover:text-white" />
                            <Button title={<FaTwitter />} btnstyles="py-3 rounded-full text-button hover:text-white" />
                            <Button title={<FaFacebookF />} btnstyles="py-3 rounded-full text-button hover:text-white" />
                        </div>
                        <div>Already have an account? <Link to="/login" className='text-white hover:text-button'>Log in</Link></div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

