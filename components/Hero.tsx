"use client";

import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

function Hero() {

    const handleScroll = () => {

    }

    return (

        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h2 className='hero__title'>
                    Find , book or rent a car - quickly and eassily!
                </h2>

                <p className='hero__subtitle'>Streameline your car rental experince with our effortless booking process.</p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleCLick={handleScroll}

                />
            </div>

            <div className='hero__image-container pt-36'>
                <div className='hero__image'>
                    <Image src='/hero.png' alt="Hero Image" fill className="object-contain">
                    </Image>
                    <div className='hero__image-overlay' />
                </div>
            </div>
        </div>
    )
}

export default Hero;