import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs' 
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () =>{
    return(
        <section className="c-wrapper">
            <div className="padding innerWidth flexCenter c-container">
                {/*Left Side  */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText">We always ready to help by providing the best service for you. We beleive a good place to live can make life better</span>

                        <div className="flexColStart contactModes">
                            {/* first Row */}
                            <div className="flexSrart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Call</span>
                                            <span className="secondaryText">021 123 145 14</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Call Now</div>
                                </div>

                                {/* Second Mode */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Chat</span>
                                            <span className="secondaryText">021 123 145 14</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Chat Now</div>
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className="flexSrart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Video Call</span>
                                            <span className="secondaryText">021 123 145 14</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Video Call Now</div>
                                </div>

                                {/* Fourth Mode */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Message</span>
                                            <span className="secondaryText">021 123 145 14</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Message Now</div>
                                </div>
                            </div>
                        </div>




                </div>

                {/* Right Side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="contact image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;