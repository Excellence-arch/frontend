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
                        <div className='flex place-content-center gap-4 py-2 px-10 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button mt-4 cursor-pointer'>
                            <Button title={<FaGoogle />} btnstyles="py-3 rounded-full" />
                            <Button title="Log In" btnstyles="" />
                        </div>
                        <div className='flex place-content-center gap-4 py-2 px-10 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button mt-4 cursor-pointer'>
                            <Button title={<FaTwitter />} btnstyles="py-3 rounded-full" />
                            <Button title="Log In" btnstyles="" />
                        </div>
                        <div className='flex place-content-center gap-4 py-2 px-10 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button mt-4 cursor-pointer'>
                            <Button title={<FaFacebookF />} btnstyles="py-3 rounded-full" />
                            <Button title="Log In" btnstyles="" />
                        </div>
                        <div className='text-center'>Don't have an account? <Link to="/signup" className='hover:text-button'>Register</Link></div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

