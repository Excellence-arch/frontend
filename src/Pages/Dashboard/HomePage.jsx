import React from 'react'
import { Header } from './Header'
import { Button } from '../../components/Button'
import { Footer } from './Footer'

export const HomePage = () => {
  return (
    <div>
        <Header />
        <div className='flex place-items-center py-20'>
            <Button title='SOS' btnstyles='bg-button rounded-full text-5xl w-[5em] md:w-[7em] py-[2em] h-[5em] md:h-[7em] text-center mx-auto my-auto' />
        </div>
        <Footer />
    </div>
  )
}