import React from 'react'
import contact from '../assets/Contactus-rafikid.png'
import { Button } from './Button'

export const Contact = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row py-10'>
                <div className='md:w-1/2 px-8 self-center'>
                    <div className='pb-8 text-4xl font-semibold md:hidden'>Contact Us</div>
                    <img height={450} src={contact} alt="" />
                </div>
                <div className='md:w-1/2 px-10'>
                    <div className='pb-14 text-4xl font-semibold hidden md:block'>Contact US</div>
                    <div className="flex flex-col gap-y-6">
                        <input className='p-4 border-2 border-primary text-primary rounded-lg' type="text" placeholder='Username' />
                        <input className='p-4 border-2 border-primary text-primary rounded-lg' type="text" placeholder='Email address' />
                        <input className='p-4 border-2 border-primary text-primary rounded-lg h-52' type="text" placeholder='Write here...' />
                        <Button title="Submit" btnstyles="py-3 bg-button font-semibold rounded-lg hover:bg-transparent hover:border-2 hover:border-button mt-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
