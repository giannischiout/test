'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAnimate, useScroll, useTransform } from 'framer-motion';



const Page = () => {
    const [hover, setHover] = useState(false)
    const [scope, animate] = useAnimate();
    const {scrollYProgress} = useScroll();
    const [rate, setRate] = useState(0)


   
    useEffect(() => {
      

        scrollYProgress.on("change", (v) => {
            console.log(v)
                console.log('starts')
                const initialInset = { top: 29, right: 20, bottom: 32, left: 20 };
                let scroll = v * 3.2;
                const newInset = `inset(${initialInset.top - (initialInset.top * scroll)}% ${initialInset.right - (initialInset.right * scroll)}% ${initialInset.bottom - (initialInset.bottom * scroll)}% ${initialInset.left - (initialInset.left * scroll)}%)`;
                animate('.image_container', {
                    clipPath: newInset
                }, {
                    ease: "linear",
                    duration: 0.5
                })
           
        })
    }, [scrollYProgress])
    
    return (
        <>
        <div ref ={scope}  className="villa_container" >
            <div className='villa_header'>
                <h1>Location</h1>
                <h2>AN OASIS OF PIECE AND QUIET</h2>
            </div>
            <div className="villa_inner">
                <div className='image_container'>
                    <Image 
                        src="/1.webp"
                        fill={true}
                    />
                </div>
            </div>
        </div>
        <div className='h-screen w-full'></div>
        </>
    );
}

export default Page;