import React from 'react'

export const Team = () => {
    const teamData = [
        {
            name: "Zoe Saldana",
            img: "",
            position: "Front-end Developer"
        },
        {
            name: "Zoe Saldana",
            img: "",
            position: "Front-end Developer"
        },
        {
            name: "Zoe Saldana",
            img: "",
            position: "Front-end Developer"
        },
    ]
    return (
        <>
            <div className='text-center'>
                <span className='font-semibold text-4xl inline-block my-14'>Meet the Team</span>
                <div className='flex flex-col md:flex-row md:gap-10 text-center gap-y-8 justify-center items-center py-10'>
                    {
                        teamData.map((data, index) => (
                            <div key={index}>
                                <div>
                                    <div className='h-52 w-52 rounded-full bg-paragraph mb-6'></div>
                                    <div>{data.name} <br /> <span className='text-lg font-thin'>{data.position}</span></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
