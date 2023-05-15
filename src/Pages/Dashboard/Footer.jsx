import React from 'react'
import { HiPhoneOutgoing, HiUserGroup } from 'react-icons/hi'
import { MdHandshake } from 'react-icons/md'
import { ImLocation } from 'react-icons/im'

export const Footer = () => {
    return (
        <div>
            <div className='flex justify-evenly absolute bottom-0 left-0 right-0 py-8'>
                <div className='hover:text-button hover:bg-white border p-4 rounded-full'>
                    <HiUserGroup />
                </div>
                <div className='hover:text-button hover:bg-white border p-4 rounded-full'>
                    <HiPhoneOutgoing />
                </div>
                <div className='hover:text-button hover:bg-white border p-4 rounded-full'>
                    <ImLocation />
                </div>
                <div className='hover:text-button hover:bg-white border p-4 rounded-full'>
                    <MdHandshake />
                </div>
            </div>
        </div>
    )
}
