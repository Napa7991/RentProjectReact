
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./FooterStyle.css"

//importing brand icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="containerFooter">
                    {/*  */}
                    <div className="row Need mt-3 mb-2 ">
                        <div className="y col-12 col-lg-12 ">
                            <h5 id="follow">Need Help?</h5>
                        </div>
                    </div>
                    <div className="row1 my-3 mx-2">
                        <div className="y col-12 col-lg-12 ">
                                <div className="AboutUs">
                                    <a href="/">About Us</a>
                                </div>
                                <div className="AboutUs">
                                    <a href="/">Contact Us</a>
                                </div>
                                <div className="AboutUs">
                                    <a href="/">Privacy Policy</a>
                                </div>
                        </div>

                    </div>


                    {/* Follow Us */}

                    <div className="row mt-3 mb-2">
                        <div className="y col-12 col-lg-12 ">
                            <h6 id="follow">Follow Us</h6>
                        </div>
                    </div>
                    <div className="row mx-5">
                        <div className="z col-3 col-lg-12 ">
                            <a href="/"><FontAwesomeIcon icon={faYoutube} className="fa-2x"></FontAwesomeIcon></a>
                        </div>
                        <div className="z col-3 col-lg-12 ">
                            <a href="/"><FontAwesomeIcon icon={faFacebook} className="fa-2x"></FontAwesomeIcon></a>
                        </div>
                        <div className="z col-3 col-lg-12 ">
                            <a href="/"><FontAwesomeIcon icon={faInstagram} className="fa-2x"></FontAwesomeIcon></a>
                        </div>
                        <div className="z col-3 col-lg-12 ">
                            <a href="/"><FontAwesomeIcon icon={faTwitter} className="fa-2x"></FontAwesomeIcon></a>
                        </div>
                    </div>

                    <div className="rowCopy mt-3 mb-2">
                        <div className="copy col-12 col-lg-12 ">
                            <span>Copyright@2022Rent.com</span>
                        </div>
                        <div className="copy col-12 col-lg-12 ">
                            <span>Design & Developed by Tailang Napa</span>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
