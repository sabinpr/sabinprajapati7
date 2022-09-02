import React from 'react'
import '../CSS/Home.css'
import banner_img from '../Images/Banner_svg.svg'

export const Home = () => {
    return (
        <>
            <div className='portfolio-container'>
                <div className='content-main'>
                    <div className='navbar'>
                        <ul className='navlist'>
                            <li className='list-content'>About</li>
                            <li className='list-content'>Portfolio</li>
                            <li className='list-content'>Reference</li>
                            <li className='list-content'>Contact</li>
                        </ul>
                    </div>
                    <div className='banner'>
                        <div className='banner-image'>
                            <img src={banner_img} alt='SABIN'></img>
                        </div>
                        <div className='banner-content'>
                            <h1>
                                <p className='para1'>Hello, I`m a</p>
                                <p className='para2'>Web Developer </p>
                                <p className='para3'>Sabin Prajapati</p>
                            </h1>
                            <div className='contact-link'>
                                <div className='link-flex'>
                                    <a href='/#' className='hire-me'>Hire me</a>
                                    <a href='/#' className='my-portfolio'>Portfolio</a>
                                </div>
                                <a href='/#' className='my-telegram'><i class='bx bxl-telegram'></i>Get in touch by Telegram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
