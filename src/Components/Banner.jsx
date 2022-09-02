import React from 'react'
import banner_img from '../Images/Banner_svg.svg'

export const Banner = () => {
    return (
        <>
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
                            <a href='/#' className='hire-me'>Hire me <span className='arrow-link'>&#8594;</span></a>
                            <a href='/#' className='my-portfolio'>Portfolio <span className='arrow-link'>&#8594;</span></a>
                        </div>
                        <a href='/#' className='my-telegram'><span><i class='bx bxl-telegram'></i>Get in touch by Telegram</span> <span className='arrow-link'>&#8594;</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}
