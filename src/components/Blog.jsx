import ecommerce from './../../public/project_img/ecommerce.jpg';
import stock from './../../public/project_img/stock.png';
import erp from './../../public/project_img/erp.png';
import nativeapp from './../../public/project_img/apps.png';
import doctor from './../../public/project_img/doctor.jpg';
import deskapp from './../../public/project_img/deskapp.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Blog = () => {

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

    const MidVariant = {
        visible: { opacity: 1, y:0, transition: {duration:0.7} },
        hidden: { opacity: 0, y: 100 },
    }


  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={control}
    variants={MidVariant}
    className='mt-4'
    >
        <div id="video_section">
            <h1>Our Latest Products</h1>
        </div>
        <div className="text-center">
            <span className="bt_line"></span>
        </div>
        

        <section id="section_4" className="row gy-5">

            <div
            className="col-md-4">
                <div className="pb-4 rounded-3 project_card overflow-hidden">
                    <div className="project_img">
                        <img src={ecommerce} alt="ecommerce" className='img-fluid'/>
                    </div>
                    <div className="description text-light p-3">
                        <span className='d-block fw-bold fs-5'>E-commerce Application</span>
                        <span className='desc text-muted'>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                    <div className="price_list mt-2 px-4 d-flex justify-content-between">
                        <span className='d-block text-warning'>$230.00</span>
                        <button className='btn btn-warning'>Buy</button>
                    </div>
                </div>
            </div>

            <div
            className="col-md-4">
                <div className="pb-4 rounded-3 project_card overflow-hidden">
                    <div className="project_img">
                        <img src={stock} alt="ecommerce" className='img-fluid'/>
                    </div>
                    <div className="description text-light p-3">
                        <span className='d-block fw-bold fs-5'>Stock & Inventory</span>
                        <span className='desc text-muted'>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                    <div className="price_list mt-2 px-4 d-flex justify-content-between">
                        <span className='d-block text-warning'>$160.00</span>
                        <button className='btn btn-warning'>Buy</button>
                    </div>
                </div>
            </div>

            <div
            className="col-md-4">
                <div className="pb-4 rounded-3 project_card overflow-hidden">
                    <div className="project_img">
                        <img src={erp} alt="ecommerce" />
                    </div>
                    <div className="description text-light p-3">
                        <span className='d-block fw-bold fs-5'>ERP Software</span>
                        <span className='desc text-muted'>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                    <div className="price_list mt-2 px-4 d-flex justify-content-between">
                        <span className='d-block text-warning'>$5990.00</span>
                        <button className='btn btn-warning'>Buy</button>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="pb-4 rounded-3 project_card overflow-hidden">
                    <div className="project_img">
                        <img src={doctor} alt="ecommerce" />
                    </div>
                    <div className="description text-light p-3">
                        <span className='d-block fw-bold fs-5'>Doctor Appointment App</span>
                        <span className='desc text-muted'>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                    <div className="price_list mt-2 px-4 d-flex justify-content-between">
                        <span className='d-block text-warning'>$289.00</span>
                        <button className='btn btn-warning'>Buy</button>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="pb-4 rounded-3 project_card overflow-hidden">
                    <div className="project_img">
                        <img src={deskapp} alt="ecommerce" />
                    </div>
                    <div className="description text-light p-3">
                        <span className='d-block fw-bold fs-5'>Customized Desktop App</span>
                        <span className='desc text-muted'>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                    <div className="price_list mt-2 px-4 d-flex justify-content-between">
                        <span className='d-block text-warning'>$289.00</span>
                        <button className='btn btn-warning'>Buy</button>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="pb-4 rounded-3 project_card overflow-hidden">
                    <div className="project_img">
                        <img src={nativeapp} alt="ecommerce" />
                    </div>
                    <div className="description text-light p-3">
                        <span className='d-block fw-bold fs-5'>Native Apps</span>
                        <span className='desc text-muted'>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                    <div className="price_list mt-2 px-4 d-flex justify-content-between">
                        <span className='d-block text-warning'>$289.00</span>
                        <button className='btn btn-warning'>Buy</button>
                    </div>
                </div>
            </div>
            

        </section>

    </motion.div>
  )
}

export default Blog