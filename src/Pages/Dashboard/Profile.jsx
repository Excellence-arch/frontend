import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Footer } from './Footer'

export const Profile = () => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1); // Go back to the previous route
    };

    return (
        <div className=''>
            <div className='mt-6 px-6'>
                <Button title='Back' btnstyles='hover:text-button' onclick={handleBackButton} />
                <div className='flex flex-col gap-10 place-items-center mt-20 md:w-2/3 mx-auto'>
                    <div className='w-32 h-32 rounded-full mx-auto mb-4 bg-paragraph'></div>
                    <div className='py-4 bg-paragraph w-full'>Name</div>
                    <div className='py-4 bg-paragraph w-full'>Phone Number</div>
                    <div className='py-4 bg-paragraph w-full'>Email Address</div>
                    <Button title='Edit' btnstyles='bg-button rounded-lg py-3 w-1/3 px-4' />
                </div>
            </div>
            <Footer />
        </div>
    )
}
