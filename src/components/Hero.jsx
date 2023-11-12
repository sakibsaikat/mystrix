import CountUp from "react-countup";
import { useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Hero = () => {
    const [counterOn, setcounterOn] = useState(false);
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
        else{
            control.start("hidden");
        }

    }, [control, inView]);
    
    const exampleVariant = {
        visible: { opacity: 1, scale: 0.8, transition: {duration:0.7} },
        hidden: { opacity: 0, scale: 0 },
    }

   

    return (
        <ScrollTrigger onEnter={()=>{setcounterOn(true)}} onExit={()=>{setcounterOn(false)}}>
            <div>
                <section id="section_1" className="row">

                    <div className="left_section col-md-6">

                        <h1 className="text-white">Make your work easier,<br />fluent and <span className="text-warning">reliable.</span></h1>


                        <p>Unlocking your digital potential with Our Software firm.<br />Our goal is to make your dream comes true.</p>


                        <div className="user_info">

                            <div className="user_info_card">
                                <h2>
                                    {counterOn && <CountUp start={0} end={520} duration={2} delay={0} />}
                                    <span className="text-warning">+</span>
                                </h2>
                                <span className="d-block">Active User</span>
                            </div>
                            <div className="user_info_card">
                                <h2>
                                    {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}
                                    <span className="text-warning">+</span>
                                </h2>
                                <span className="d-block">Software</span>
                            </div>
                            <div className="user_info_card">
                                <h2>
                                    {counterOn && <CountUp start={0} end={76} duration={2} delay={0} />}
                                    <span className="text-warning">+</span>
                                </h2>
                                <span className="d-block">Apps</span>
                            </div>

                        </div>


                        <div className="btns">
                            <a href="#" className="btn">Watch Video</a>
                            <a href="#" className="btn">Explore More</a>
                        </div>
                    </div>

                    <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={control}
                    variants={exampleVariant}
                    className="right_section col-md-6" >
                        <div className="gradient_background">
                            <div className="slider">
                                <div className="slide_view">
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="images/slide3.png" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="images/slide1 (1).jpeg" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="images/slide1 (2).jpeg" className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="slide_caption">
                                    <h4 className="text-white pt-2 px-4">Latest Projects</h4>
                                    <p className="px-4">Recently, we have developed some Android and iOS Apps.
                                        We always use the latest technology to develop our softwares.</p>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                </section>

            </div>
        </ScrollTrigger>

    )
}

export default Hero