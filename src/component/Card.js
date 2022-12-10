import React, { useState } from 'react';
import "./Style.css"

// importing swiper and tools
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';

//importing fontawsome
// import {FontAwsomeIcon} from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import FontApi from './FontApi';

// Data Api;
import dataLower from './Data';
import Footer from './Footer';


const Card = () => {
    const [data, setData] = useState(FontApi);
    // for lower
    const [noOfElem, setnoOfElem] = useState(4);
    const slice = dataLower.slice(0, noOfElem);
    const loadMore = () => {
        setnoOfElem(noOfElem + noOfElem);
    }
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
                        <div className="btn"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></div>
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
                            {data.map((curElem) => {
                                const { id, font, hero, name } = curElem;
                                console.log(font)
                                return (
                                    <>
                                        <SwiperSlide className="middle-card" key={curElem.id}>
                                            <FontAwesomeIcon icon={faBuilding}
                                                className="fa-xl pt-2"></FontAwesomeIcon>

                                            <h6 className="xl pt-2">{name}</h6>
                                        </SwiperSlide>
                                    </>
                                )
                            })}


                        </Swiper>
                    </div>
                </div>

                {/* <div className="lower">
                    {slice.map((item, index) => {
                        console.log(item)
                        return (
                            <>
                                <div className="item">
                                    <div className="item1">
                                        <img src={item.img} alt="error"/>
                                        <h6>hello</h6>
                                        <span>price</span>
                                    </div>
                                    
                                  
                                </div>
                            </>
                        )
                    })}

                </div> */}
                {/* <button className='btn btn-dark d-block w-100' onClick={()=>loadMore()}>Load More</button> */}


                {/* trying lower from loadmore style */}

                <section className='py-4 container'>
                    <div className="row justify-content-center">
                        {/* slice.map -----> data.cardData.map */}
                        {slice.map((item, index) => {
                            return (
                                <>
                                    <div className="x col-6 col-md-6 col-lg-3 mx-0 mb-4">
                                        <div className="new">
                                             <img src={item.img} alt="tryimg" className='card-img-top' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Rs.{item.title}</h5>
                                            <p className="card-text">{item.desc}</p>
                                        </div>
                                        </div>
                                       
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <button className='btn btn-dark d-block w-100' onClick={() => loadMore()}>
                        Load More
                    </button>
                </section>

                {/* Footer */}
                <Footer/>
            
            </div>

        </>
    )
}

export default Card
