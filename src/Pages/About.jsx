import React from 'react'
import { Layout } from '../components/Layout'
import { Team } from '../components/Team'
import { Contact } from '../components/Contact'

export const About = () => {
    return (
        <Layout>
            <div className=' p-10 md:p-20'>
                <div className=''>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, cupiditate reprehenderit quam, ut iure sed minima eligendi suscipit blanditiis corrupti numquam nihil, quidem a veniam provident recusandae molestias ratione corporis?<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta adipisci obcaecati perferendis, alias quas nemo molestiae ea natus, suscipit vero expedita repudiandae illum consequuntur a veniam iure commodi maiores?</div>
                </div>
                <div className='text-4xl my-14 font-bold'>About Us</div>
                <div className='mb-10'>
                    <div className='text-button text-2xl mb-8'>Who we are</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero est sit quaerat debitis voluptate, aperiam iste consectetur eligendi. Ratione, id. Quas sunt porro, ipsa adipisci repudiandae expedita magni vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quisquam eum numquam eaque ut, autem aspernatur. Qui, dolor magni facilis aut, porro cumque dicta iure optio voluptatem tempore eaque saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis similique error voluptatibus officia officiis necessitatibus repellat magnam vel sequi quia dolore, itaque voluptatem fuga quod eius eveniet, est molestias!
                    </div>
                </div>
                <div className='mb-10'>
                    <div className='text-button text-2xl mb-8'>What we sell</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero est sit quaerat debitis voluptate, aperiam iste consectetur eligendi. Ratione, id. Quas sunt porro, ipsa adipisci repudiandae expedita magni vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quisquam eum numquam eaque ut, autem aspernatur. Qui, dolor magni facilis aut, porro cumque dicta iure optio voluptatem tempore eaque saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis similique error voluptatibus officia officiis necessitatibus repellat magnam vel sequi quia dolore, itaque voluptatem fuga quod eius eveniet, est molestias!
                    </div>
                </div>
                <div className=''>
                    <div className='text-button text-2xl mb-8'>Why we do it</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero est sit quaerat debitis voluptate, aperiam iste consectetur eligendi. Ratione, id. Quas sunt porro, ipsa adipisci repudiandae expedita magni vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quisquam eum numquam eaque ut, autem aspernatur. Qui, dolor magni facilis aut, porro cumque dicta iure optio voluptatem tempore eaque saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis similique error voluptatibus officia officiis necessitatibus repellat magnam vel sequi quia dolore, itaque voluptatem fuga quod eius eveniet, est molestias!
                    </div>
                </div>
            </div>
            <Team />
            <Contact />
        </Layout>
    )
}
