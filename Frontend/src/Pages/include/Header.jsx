import React, { useContext, useState } from 'react';
import { Store } from '../../Utils/Store';
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { state, dispatch } = useContext(Store);
    const { UserInfo, ContactInfo } = state;
    const location = useLocation();


    return (
        <>
            <header id="masthead" className="header ttm-header-style-01">
                <div className="ttm-header-box-inner">
                    {/*top_bar*/}
                    <div className="top_bar clearfix">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="d-table w-100">
                                        <div className="top_bar_contact_item float-right">
                                            <div className="top_bar_icon">
                                                <i className="fa fa-phone" />
                                            </div>
                                            Call Us: {ContactInfo.contact_phone}
                                        </div>
                                        <div className="top_bar_contact_item top_bar_social">
                                            <ul className="social-icons sub-menu">
                                                <li>
                                                    <Link to={ContactInfo.facebook}>
                                                        <i className="fa fa-facebook mx-3" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={ContactInfo.facebook}>
                                                        <i className="fa fa-twitter mx-3" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={ContactInfo.facebook}>
                                                        <i className="fa fa-google-plus mx-3" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={ContactInfo.facebook}>
                                                        <i className="fa fa-linkedin mx-3" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*top_bar end*/}
                    <div
                        id="site-header-menu"
                        className="site-header-menu ttm-bgcolor-darkgrey"
                    >
                        <div className="site-header-menu-inner ttm-stickable-header">
                            <div className="container-fluid">
                                {/*site-navigation */}
                                <div className="site-navigation d-flex flex-row align-items-center">
                                    {/* site-branding */}
                                    <div className="site-branding">
                                        <Link
                                            className="home-link"
                                            to="index.html"
                                            title="zenista"
                                            rel="home"
                                        >
                                            <img
                                                id="logo-img"
                                                className="img-center"
                                                src="images/logo-white.png"
                                                alt="logo-img"
                                            />
                                        </Link>
                                    </div>
                                    {/* site-branding end */}
                                    <div className="btn-show-menu-mobile menubar menubar--squeeze">
                                        <span className="menubar-box">
                                            <span className="menubar-inner" />
                                        </span>
                                    </div>
                                    {/* menu */}
                                    <nav className="main-menu menu-mobile m-auto" id="menu">
                                        <ul className="menu">
                                            <li className={`mega-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
                                                <Link to="/" className="mega-menu-link">Home</Link>
                                            </li>
                                            <li className={`mega-menu-item ${location.pathname === '/services' ? 'active' : ''}`}>
                                                <Link to="/services" className="mega-menu-link">Services</Link>
                                            </li>
                                            <li className={`mega-menu-item ${location.pathname === '/about-us' ? 'active' : ''}`}>
                                                <Link to="/about-us" className="mega-menu-link">About</Link>
                                            </li>
                                            <li className={`mega-menu-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                                                <Link to="/contact-us" className="mega-menu-link">Contact</Link>
                                            </li>
                                            {/* <li className={`mega-menu-item ${location.pathname === '/blogs' ? 'active' : ''}`}>
                                                <Link to="/blogs" className="mega-menu-link">Blogs</Link>
                                            </li> */}
                                        </ul>
                                    </nav>

                                </div>
                                {/* site-navigation end*/}
                            </div>
                        </div>
                    </div>

                </div>
            </header>

        </>
    );
};

export default Header;
