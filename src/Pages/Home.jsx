import React from 'react'
import { Banner } from '../Components/Banner'
import { Navbar } from '../Components/Navbar'
import { Quote } from '../Components/Quote'
import '../CSS/Home.css'

export const Home = () => {
    return (
        <>
            <div className='portfolio-container'>
                <div className='content-main'>
                    <Navbar />
                    <Banner />
                    <Quote />
                </div>
            </div>
        </>
    )
}
