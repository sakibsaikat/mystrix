import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {

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

    const aboutVariant = {
        visible: { opacity: 1, scale: 1, transition: {duration:0.7} },
        hidden: { opacity: 0, scale: 0 },
    }
    const aboutContentVariant = {
        visible: { opacity: 1, transition: {duration:0.7},translateX:0},
        hidden: { opacity: 0,  translateX:100},
    }

  return (
    <>
        
        <div id="about_section">
            <h1>About Us</h1>
            
        </div>
        <div className="text-center">
            <span className="bt_line"></span>
        </div>
        

        <section id="section_2" className="mt-4 row overflow-hidden">
            <motion.div
            ref={ref}
            initial="hidden"
            animate={control}
            variants={aboutVariant}
            className="col-md-6 left">
                <img src="images/information.png" alt="" />
            </motion.div>

            <motion.div
            ref={ref}
            initial="hidden"
            animate={control}
            variants={aboutContentVariant}
            className="col-md-6 right about-content">
                <h3>We believe in <span style={{color:"orange"}}>Quality</span></h3>

                <p>
                    At our IT Farm, we are passionate about harnessing the power of technology to cultivate innovative solutions and drive business growth.
                    <br/><br/>
                    
                    Our IT Farm operates on a foundation of trust, reliability, and transparency. We prioritize clear and open communication, ensuring that our clients are involved and informed every step of the way. We strive to build long-lasting partnerships with our clients, becoming an integral part of their success stories.

                </p>
            </motion.div>
            

        </section>

    </>
  )
}

export default About