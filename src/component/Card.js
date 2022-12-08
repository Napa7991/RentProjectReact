import React from 'react';
import"./Style.css"

// importing swiper and tools
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';

//importing fontawsome
// import {FontAwsomeIcon} from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faBuilding,faHouse,faBriefcase,faLandmark,faAd } from '@fortawesome/free-solid-svg-icons';


const Card = () => {
    return (
        <>
            <div className="container">
                <div className="Upper">
                    <h3>Dream House:</h3>
                    <h3>Find Yours</h3>
                    <div className='input'>
                        <label htmlFor="/">Location</label>
                        <br />
                        <input type="text" placeholder='Everywhere' className='inp' />
                        <div className="btn">icon</div>
                    </div>
                </div>
                <div className="middle">
                    <span id="category">Category</span>
                    <div className="Slider py-4 justify-content-center">
                        <Swiper
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode]}

                        className="mySwiper"
                        slidesPerView={3}
                        spaceBetween={30}
                        >
                            <SwiperSlide className="middle-card">
                                <FontAwesomeIcon icon={faHouse}
                                className="fa-xl pt-2"></FontAwesomeIcon>
                                <h6 className="x pt-2">House</h6>
                            </SwiperSlide>
                            <SwiperSlide className="middle-card">
                                <FontAwesomeIcon icon={faHouse}
                                className="fa-xl pt-2"></FontAwesomeIcon>
                                <h6 className="x pt-2">House</h6>
                            </SwiperSlide>
                            <SwiperSlide className="middle-card">
                                <FontAwesomeIcon icon={faHouse}
                                className="fa-xl pt-2"></FontAwesomeIcon>
                                <h6 className="x pt-2">House</h6>
                            </SwiperSlide>
                            <SwiperSlide className="middle-card">
                                <FontAwesomeIcon icon={faHouse}
                                className="fa-xl pt-2"></FontAwesomeIcon>
                                <h6 className="x pt-2">House</h6>
                            </SwiperSlide>
                            <SwiperSlide className="middle-card">
                                <FontAwesomeIcon icon={faHouse}
                                className="fa-xl pt-2"></FontAwesomeIcon>
                                <h6 className="x pt-2">House</h6>
                            </SwiperSlide>
                            <SwiperSlide className="middle-card">
                                <FontAwesomeIcon icon={faHouse}
                                className="fa-xl pt-2"></FontAwesomeIcon>
                                <h6 className="x pt-2">House</h6>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
                    
                <div className="lower">
                </div>
            </div>
        </>
    )
}

export default Card
