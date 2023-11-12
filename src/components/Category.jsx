
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './category.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import ui from './../../public/cat_icons/ux.png';
import frontend from './../../public/cat_icons/development.png';
import backend from './../../public/cat_icons/programming.png';
import database from './../../public/cat_icons/database.png';
import desk from './../../public/cat_icons/desktops.png';
import app from './../../public/cat_icons/app-settings.png';
import machine from './../../public/cat_icons/machine-learning.png';
import robot from './../../public/cat_icons/chat-bot.png';



const Category = () => {
  return (
    <div>
      <div id="about_section">
        <h1>Product Categories</h1>

      </div>
      <div className="text-center">
        <span className="bt_line"></span>
      </div>

      <div className="categories mt-5">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper swiper2"
        >
          <SwiperSlide className='swiper2-slide'>
            <div className='text-center'>
              <img src={ui} alt="ui" width={100}/>
              <span className='d-block fs-6 mt-3'>UI/UX Design</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper2-slide'>
            <div className='text-center'>
              <img src={frontend} alt="ui" width={100}/>
              <span className='d-block fs-6 mt-3'>Frontend Development</span>
              <span className='d-block' style={{fontSize:11}}>(HTML5, CSS4, Bootstrap5)</span>
              <span className='d-block' style={{fontSize:11}}>(Vanilla JS,React JS)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper2-slide'>
          <div className='text-center'>
              <img src={backend} alt="ui" width={100}/>
              <span className='d-block fs-6 mt-3'>Backend Development</span>
              <span className='d-block' style={{fontSize:11}}>(PHP , LARAVEL)</span>
              <span className='d-block' style={{fontSize:11}}>(Node JS, Express JS)</span>
              <span className='d-block' style={{fontSize:11}}>(Java, Kotlin)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper2-slide'>
          <div className='text-center'>
              <img src={database} alt="ui" width={100}/>
              <span className='d-block fs-6 mt-3'>Database</span>
              <span className='d-block' style={{fontSize:11}}>(MySQL, MonoDB, Firebase)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper2-slide'>
          <div className='text-center'>
              <img src={desk} alt="ui" width={100}/>
              <span className='d-block fs-6 mt-3'>Desktop App</span>
              <span className='d-block' style={{fontSize:11}}>(Java, Java Swing/FX, JDBC)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper2-slide'>
          <div className='text-center'>
              <img src={app} alt="ui" width={100}/>
              <span className='d-block fs-6 mt-3'>Native App Development</span>
              <span className='d-block' style={{fontSize:11}}>(Flutter, React Native)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper2-slide'>
          <div className='text-center'>
              <img src={machine} alt="ui" width={100}/>
              <span className='d-block fs-6 mt-3'>Machine Learning</span>
              <span className='d-block' style={{fontSize:11}}>(OpenCV, ANN, CNN)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper2-slide'>
          <div className='text-center'>
              <img src={robot} alt="ui" width={100}/>
              <span className='d-block fs-6 mt-3'>Robotics</span>
              <span className='d-block' style={{fontSize:11}}>(C++, Python)</span>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  )
}

export default Category