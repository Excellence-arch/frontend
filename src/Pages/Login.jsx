import React from 'react'
import { Layout } from '../components/Layout'
import { Button } from '../components/Button'
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const Login = () => {
    return (
        <>
            <Layout>
                <div className='px-10 py-10'>
                    <div className='flex flex-col gap-6 md:w-4/6 md:mx-auto md:justify-center'>
                    <div className='text-4xl font-bold mb-6'>Log in</div>
                    <input className='p-4 border-2 border-primary text-primary rounded-lg' type="text" placeholder="Username/Email Address" name="" />
                    <input className='p-4 border-2 border-primary text-primary rounded-lg' type="password" placeholder="Password" name="" />
                    <Button title="Log In" btnstyles="py-3 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button mt-4" />
                    <div className="text-center mt-4">
                        <div className='border-b border-paragraph -mb-3'></div>
                        <div className='bg-gradient-to-l from-[#272d4c] to-[#2a3051] px-2 inline-block'>Log In with</div>
                    </div>
                    <div className='flex justify-center gap-4'>
                        <Button title={<FaGoogle />} btnstyles="py-3 rounded-full text-button hover:text-white" />
                        <Button title={<FaTwitter />} btnstyles="py-3 rounded-full text-button hover:text-white" />
                        <Button title={<FaFacebookF />} btnstyles="py-3 rounded-full text-button hover:text-white" />
                    </div>
                    <div className='text-center'>Don't have an account? <Link to="/signup" className='hover:text-button'>Register</Link></div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

