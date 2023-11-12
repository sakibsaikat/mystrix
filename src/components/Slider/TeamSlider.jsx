// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { EffectCoverflow, Navigation } from 'swiper/modules';




const TeamSlider = () => {
  return ( 
    <>
      <div id="team_section">
        <h1>Meet Our Team</h1>
      </div>
      <div className="text-center">
            <span className="bt_line"></span>
      </div>
        

      <section id="section_3" className="row mt-5">


        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container swiper1"
        >

          



          <SwiperSlide className='swiper-slide1'>

            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/sakib.jpeg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Sakibur Rahman Saikat</h4>
                <h6>Founder</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/demons.king.549"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.github.com/sakibsaikat"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/in/sakibur-rahman-saikat-7b59281b7"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>




          </SwiperSlide>


          <SwiperSlide className='swiper-slide1'>
            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/sina.jpg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Ibna Sina</h4>
                <h6>HR Manager</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/ibna.sina.370"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </SwiperSlide>


          
          <SwiperSlide className='swiper-slide1'>

            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/roni.jpg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Ebrahim Khalil Roni</h4>
                <h6>Software Engineer (Web)</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/ek.roni.54"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide1'>
            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/rifat.jpg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Rifat Hossen</h4>
                <h6>Software Engineer (PHP & Laravel)</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/rifatrrayhan/"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
{/* 
          <SwiperSlide>
            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/maksuda.jpeg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Maksuda Akter Trishna</h4>
                <h6>Database Administrator</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/tasfia.trishna"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

           */}
          <SwiperSlide className='swiper-slide1'>
            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/azmain.jpeg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Azmain Sheikh Rubayet</h4>
                <h6>Software Engineer</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/azmain.sheikh.rubayed/"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://github.com/azmainofficial"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/in/md-azmain-sheikh-rubayed-b23b2b241"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide1'>
            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/naeem.jpg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Ñâėëm Šårkęr</h4>
                <h6>Apps Developer (Flutter)</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/naeem.sarker.Zmc/"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide1'>
            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/mukim.jpg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Mahdin Islam Mukim</h4>
                <h6>Apps Developer & UI/UX Designer</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/MRM.me.300405"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide1'>
            <div className="team_member_card col-md-3">
              <div className="member_img">
                <img src="images/sabbir.jpg" alt="sakib" className="img-fluid" />
              </div>
              <div className="member_details text-center ">
                <h4>Sabbir Ahmed</h4>
                <h6>Apps Developer & UI/UX Designer</h6>

                <div className="social_links">
                  <a href="https://www.facebook.com/ahmed.sabbir.2147"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                  <a href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
        </Swiper>
      </section>
    </>
  )
}

export default TeamSlider