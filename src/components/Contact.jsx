

const Contact = () => {
  return (
    <div>
            
        <section id="section_5" className="row mt-5">
            <div className="col-md-3">
                <div className="logo">
                    <div className="img">
                        {/* <img src="images/logo.PNG" alt="logo" width="40"/> */}
                    </div>
                    <div className="logo_text pt-2">
                        <h4 className="text-white"><span className="text-warning">M</span>ystrix</h4>
                    </div>
                </div>

                <p className="text-white text-center mt-4">For more details, contact<br/>
                with us via following links.</p>

                <div className="social_links">
                    <a href="https://www.facebook.com/demons.king.549"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.github.com/sakibsaikat"><i className="fa-brands fa-github"></i></a>
                    <a href="https://bd.linkedin.com/in/sakibur-rahman-saikat-7b59281b7"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div> 
        
            <div className="col-md-3">
                <h4 className="text-white">Company</h4>
                <a href="#" className="d-block">About</a>
                <a href="#" className="d-block">Terms & Conditions</a>
                <a href="#" className="d-block">Privacy Policy</a>
                <a href="#" className="d-block">Support</a>
                <a href="#" className="d-block">Blog</a>
            </div>
            <div className="col-md-3">
                <h4 className="text-white">Extra Links</h4>
                <a href="#" className="d-block">News</a>
                <a href="#" className="d-block">Testimonials</a>
                <a href="#" className="d-block">Services</a>
                <a href="#" className="d-block">Our Team</a>
                <a href="#" className="d-block">Our approach</a>
            </div>
            <div className="col-md-3">
                <h4 className="text-white">Contact Info</h4>
                <span className="d-block">Phone: +880-1763-088973</span>
                <span className="d-block">Email: saikat.sakib45@gmail.com</span>
                <span className="d-block">Whats App: +880-1763-088973</span>
                <span className="d-block">Telegram: +880-1763-088973</span>
                <span className="d-block">Airport, Dhaka.</span>
            </div>

        </section>
    </div>
  )
}

export default Contact