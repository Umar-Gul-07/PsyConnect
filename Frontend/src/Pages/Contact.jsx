import { useContext } from "react"
import { Store } from "../Utils/Store"


const Contact = ({ title }) => {
    const {state} = useContext(Store)
    const {ContactInfo} = state

    return (
        <>
            <div className="ttm-page-title-row">
                <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title"> Contact Us</h2>
                                    <h5 className="sub-title">
                                        {" "}
                                        Smile Pure always places patients at the center of our attention
                                    </h5>
                                </div>
                                <div className="breadcrumb-wrapper">
                                    <span>
                                        <a title="Homepage" href="index.html">
                                            Home
                                        </a>
                                    </span>
                                    <span className="ttm-bread-sep">
                                        <i className="fa fa-long-arrow-right" />
                                    </span>
                                    <span> Contact Us 1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-main">
                <section className="ttm-row pt-85 res-991-pt-45 pb-45 res-991-pb-0 clearfix">
                    <div className="container">
                        {/*row*/}
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                {/*section-title*/}
                                <div className="section-title style1">
                                    <div className="title-header">
                                        <h5>STEPS TOWARDS MENTAL FITNESS</h5>
                                        <h2 className="title">
                                            Get details about <strong>Psychology</strong>
                                        </h2>
                                    </div>
                                    <div className="title-desc">
                                        <p>
                                            Smile Pure always places patients at the center of our
                                            attention, and concentrate on imprd of technologies skill.
                                        </p>
                                    </div>
                                </div>
                                {/*section-title end*/}
                            </div>
                        </div>
                        {/*row end*/}
                        {/* row */}
                        <div className="row ttm-vertical_sep pt-35 pb-30 res-991-pb-20">
                            <div className="col-lg-4">
                                {/*featured-icon-box*/}
                                <div className="featured-icon-box icon-align-before-content">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg ttm-icon_element-style-rounded">
                                            <i className="flaticon flaticon-placeholder" />
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>Office Location</h5>
                                        </div>
                                        <div className="featured-desc">
                                            {ContactInfo.address}
                                        </div>
                                    </div>
                                </div>
                                {/* featured-icon-box end*/}
                            </div>
                            <div className="col-lg-4">
                                {/*featured-icon-box*/}
                                <div className="featured-icon-box icon-align-before-content">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg ttm-icon_element-style-rounded">
                                            <i className="flaticon flaticon-telephone" />
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>Contact Details</h5>
                                        </div>
                                        <div className="featured-desc">
                                            Call Us: {ContactInfo.contact_phone}
                                            <br />
                                            Mail us: {ContactInfo.contact_email}
                                        </div>
                                    </div>
                                </div>
                                {/* featured-icon-box end*/}
                            </div>
                            <div className="col-lg-4">
                                {/*featured-icon-box*/}
                                <div className="featured-icon-box icon-align-before-content">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg ttm-icon_element-style-rounded">
                                            <i className="flaticon flaticon-24-hours" />
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>Opening Hours</h5>
                                        </div>
                                        <div className="featured-desc">
                                            Monday – Saturday
                                            <br />
                                            10:30 AM – 7:00 PM
                                        </div>
                                    </div>
                                </div>
                                {/* featured-icon-box end*/}
                            </div>
                        </div>
                        {/*row end*/}
                    </div>
                </section>
                <section className="ttm-row p-0 res-991-p-0 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7"></div>
                            <div className="col-lg-5">
                                <div className="ttm-col-bgcolor-yes ttm-bg ttm-bgcolor-white z-index-2 spacing-15 box-shadow_2">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                        <div className="ttm-col-wrapper-bg-layer-inner" />
                                    </div>
                                    <div className="layer-content text-center">
                                        <div className="mb-40 res-991-mb-0">
                                            <h4>
                                                Fill out for{" "}
                                                <strong className="ttm-textcolor-skincolor">Contact</strong>
                                            </h4>
                                            <p className="text-center">
                                                Fill-in the contact form and get immediate assistance from our
                                                medical consultance.
                                            </p>
                                        </div>
                                        <form
                                            action="#"
                                            className="contact_form_1 wrap-form clearfix"
                                            method="post"
                                        >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>
                                                        <span className="text-input">
                                                            <input
                                                                name="name"
                                                                type="text"
                                                                defaultValue=""
                                                                placeholder="Your Name :"
                                                                required="required"
                                                            />
                                                        </span>
                                                    </label>
                                                    <label>
                                                        <span className="text-input">
                                                            <input
                                                                name="email"
                                                                type="text"
                                                                defaultValue=""
                                                                placeholder="Your E-mail :"
                                                                required="required"
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>
                                                        <span className="text-input">
                                                            <input
                                                                name="phone"
                                                                type="text"
                                                                defaultValue=""
                                                                placeholder="Your Subject :"
                                                                required="required"
                                                            />
                                                        </span>
                                                    </label>
                                                    <label>
                                                        <span className="text-input">
                                                            <textarea
                                                                name="message"
                                                                rows={3}
                                                                placeholder="Your Messages :"
                                                                required="required"
                                                                defaultValue={""}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100 mt_5"
                                                type="submit"
                                            >
                                                Post A Comments!
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="google_map" className="google_map">
                        <div className="map_container">
                            <div id="map" className="map_1">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.8793352645693!2d-79.38831242419016!3d43.64744676039797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34e29eb5e4b1%3A0x1cd7f05cedb8a2cc!2sKing%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1602742929869!5m2!1sen!2sin" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-section_2 */}
                <section className="ttm-row about-section_2 ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img4 clearfix">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
                    <div className="container">
                        {/*row*/}
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="row-title style2 pt-20 res-991-pt-0">
                                    <div className="mb-20">
                                        <div className="ttm-play-icon-btn">
                                            <div className="ttm-play-icon-animation">
                                                <a
                                                    href="https://youtu.be/7e90gBu4pas"
                                                    target="_self"
                                                    className="ttm_prettyphoto"
                                                >
                                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-rounded">
                                                        <i className="fa fa-play ttm-textcolor-darkgrey" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* section title */}
                                    <div className="section-title without-seperator ttm-textcolor-white clearfix">
                                        <div className="title-header">
                                            <h5>Steps towards mental fitness</h5>
                                            <h2 className="title ttm-textcolor-white">
                                                We are delivering only exceptional quality work
                                            </h2>
                                        </div>
                                    </div>
                                    {/* section title end */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex pt-30">
                                            <h2 className="ttm-textcolor-white pr-10 res-991-plr-0">
                                                4568
                                            </h2>
                                            <div className="ttm-textcolor-white pl-20">
                                                <h4>Personality Disorders</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit do
                                                    eiusmod tempor incididunt.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-horizontal_sep mt-20 mb-15" />
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex pt-20">
                                            <h2 className="ttm-textcolor-white pr-10 res-991-plr-0">
                                                7893
                                            </h2>
                                            <div className="ttm-textcolor-white pl-20">
                                                <h4>Individual Counselling</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit do
                                                    eiusmod tempor incididunt.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-section_2 end */}
         
            </div>



        </>
    )
}

export default Contact
