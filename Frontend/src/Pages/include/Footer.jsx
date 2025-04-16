import React, { useContext } from 'react'
import { Store } from '../../Utils/Store'
import { Link } from 'react-router-dom'


const Footer = () => {
    const { state } = useContext(Store)
    const { ContactInfo } = state
    return (
        <>
            <footer className="footer widget-footer ttm-textcolor-white clearfix">
               
                <div className="second-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                                <div className="widget widget_text  clearfix">
                                    <h3 className="widget-title">About Us</h3>
                                    <p>
                                        We are on the mission to promote the advancement, communication of
                                        psychological science &amp; knowledge to benefit society.
                                    </p>
                                    <ul className="widget_contact_wrapper mt-20">
                                        <li>Phone: {ContactInfo.contact_phone}</li>
                                        <li>
                                            Mail Id <Link to="mailto:info@example.com">: {ContactInfo.contact_email}  </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                                <div className="widget widget_nav_menu clearfix">
                                    <h3 className="widget-title">Useful Links</h3>
                                    <ul id="menu-footer-quick-links">
                                        <li>
                                            <Link to="about1.html">About Us  </Link>
                                        </li>
                                        <li>
                                            <Link to="project-style1.html">Programs  </Link>
                                        </li>
                                        <li>
                                            <Link to="service1.html">Our Solutions  </Link>
                                        </li>
                                        <li>
                                            <Link to="about2.html">Testimonials  </Link>
                                        </li>
                                        <li>
                                            <Link to="about2.html">Leadership  </Link>
                                        </li>
                                        <li>
                                            <Link to="contact.html">Contact Us  </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                          
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                                <div className="widget widget_timing clearfix">
                                    <h3 className="widget-title">Our Time Schedule</h3>
                                    <ul className="ttm-pricelist-block">
                                        <li>
                                            Mon to Wed
                                            <span className="service-price">10:00 am to 2:30 pm</span>
                                        </li>
                                        <li>
                                            Thu to Fri
                                            <span className="service-price">11:00 am to 4:30 pm</span>
                                        </li>
                                        <li>
                                            Saturday
                                            <span className="service-price">10:00 am to 1:00 pm</span>
                                        </li>
                                        <li>
                                            Sunday<span className="service-price">Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-footer-text">
                    <div className="container">
                        <div className="row copyright">
                            <div className="col-lg-5 col-md-4 col-sm-12">
                                <span>Copyright © 2020&nbsp; Zenista All rights reserved.</span>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="footer-logo">
                                    <img
                                        id="footer-logo-img"
                                        className="img-center"
                                        src="images/footer-logo.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div
                                    id="menu-footer-menu"
                                    className="d-flex align-items-center justify-content-end"
                                >
                                    <ul className="footer-nav-menu">
                                        <li>
                                            <Link to="about1.html">About Us  </Link>
                                        </li>
                                        <li>
                                            <Link to="service1.html">Services  </Link>
                                        </li>
                                        <li>
                                            <Link to="f-a-q.html">Privacy  </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
