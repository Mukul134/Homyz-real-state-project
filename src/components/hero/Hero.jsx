import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
import './Hero.css';
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            {/* Left Side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <motion.h1
                    initial={{y: "2rem", opacity:0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        duration: 2, 
                        type: "spring"
                    }}
                    >Discover <br /> Most Suitable <br /> Property</motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className="secondaryText">Find your dream property with your fevourit place.</span>
                    <span className="secondaryText">Contact us, We can help you for your wishes.</span>
                </div>
                <div className="flexCenter search-bar">
                     <HiLocationMarker color="var(--blue)" size={25} />
                     <input type="text" />
                     <button className="button">Search</button>
                </div>
                <div className="flexCenter stats">
                  <div className="flexColCenter stat">
                    <span><CountUp start={8800} end={9000} duration={3}/>
                    <span>+</span>
                    </span>
                    <span className="secondaryText">Premium products</span>
                    </div>

                    <div className="flexColCenter stat">
                    <span><CountUp start={1900} end={2000} duration={3}/>
                    <span>+</span>
                    </span>
                    <span className="secondaryText">Happy Customers</span>
                    </div>

                    <div className="flexColCenter stat">
                    <span><CountUp end={28} duration={3}/>
                    <span>+</span>
                    </span>
                    <span className="secondaryText">Awards Winnings</span>
                    </div>  
                </div>
            </div>
            {/* Right Side */}
            <div className="flexCenter hero-right">
                <motion.div 
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{ 
                        duration: 2,
                        type: "spring"}}
                className="image-container">
                    <img src="./hero-image.png" alt="hero-image" />
                </motion.div>
            </div>
        </div> 
    </section>
  )
}

export default Hero
