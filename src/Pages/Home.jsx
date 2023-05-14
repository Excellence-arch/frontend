import React from 'react'
import { Layout } from '../components/Layout'
import { Landing } from '../components/Landing'


export const Home = () => {
  return (
    <>
      <Layout>
        <div className='Home text-center py-20 font-DidactG'>
          <Landing />
        </div>
      </Layout>
    </>
  )
}

