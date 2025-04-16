import HomeSlider from "./include/Slider"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialSection from "./include/TestionialSection";


const Home = ({ title }) => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // hide arrows for smoother loop
        infinite: true,
        autoplay: true,
        speed: 4000,            // controls speed of transition
        autoplaySpeed: 0,       // delay between slides (0 = continuous)
        cssEase: 'linear',      // linear = constant speed
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2 } },
            { breakpoint: 777, settings: { slidesToShow: 2 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } },
        ],
    };

    const cards = Array(6).fill({
        title: 'Group Counselling',
        desc: 'Where a group of people meet regularly to discuss, interact, and explore problems with each other leader.',
        icon: 'flaticon flaticon-psychologist-1',
        link: 'group-counselling.html',
    });


    return (
        <>
            <HomeSlider />

            <section className="ttm-row portfolio-section_1 ttm-bgcolor-grey clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-10 m-auto text-center">
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h5>Steps towards mental fitness</h5>
                                    <h2 className="title">
                                        Thing in Psychology <strong>Treatment</strong>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-30">
                        <div className="col-12">
                            <Slider {...settings}>
                                {cards.map((item, idx) => (
                                    <div key={idx} className="p-2">
                                        <div className="featured-icon-box icon-align-top-content style2">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                                    <i className={item.icon} />
                                                </div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h5>
                                                        <a href={item.link}>{item.title}</a>
                                                    </h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>{item.desc}</p>
                                                </div>
                                                <a
                                                    className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-icon-btn-right ttm-btn-color-dark"
                                                    href={item.link}
                                                >
                                                    READ MORE <i className="fa fa-arrow-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pt-30 res-991-pt-10 text-center">
                                <p className="ttm-location-place font-weight-600 mb-0">
                                    Perfect Solutions That Business Demands.
                                    <a href="service1.html">
                                        Finds Your Solutions <i className="fa fa-arrow-circle-right" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ttm-row zero-padding-section bg-layer-equal-height res-991-pb-45 ttm-bgcolor-white clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="ttm-bg ttm-col-bgcolor-yes spacing-5 z-index-0">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                                <div className="layer-content">
                                    {/*ttm_single_image-wrapper*/}
                                    <div className="ttm_single_image-wrapper txt-md-left">
                                        <img
                                            className="img-fluid"
                                            src="images/single-img-05.png"
                                            title="single-img-two"
                                            alt="single-img-five"
                                        />
                                    </div>
                                    {/*ttm_single_image-wrapper end*/}
                                    {/*featured-icon-box*/}
                                    <div className="featured-icon-box style9 text-center icon-align-top-content ttm-bgcolor-skincolor">
                                        <div className="featured-icon-box-inner-1">
                                            <div className="featured-icon-box-inner-2">
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-lg">
                                                        <i className="flaticon flaticon-psychology-3" />
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h5>45 Years</h5>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>Experiance Of Psychology</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* featured-icon-box end*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span ttm-bgcolor-white z-index-2 spacing-6">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                    <div className="ttm-col-wrapper-bg-layer-inner" />
                                </div>
                                <div className="layer-content">
                                    {/*section title*/}
                                    <div className="section-title">
                                        <div className="title-header">
                                            <h5>Steps towards mental fitness</h5>
                                            <h2 className="title">
                                                Modern caring mental health and <strong>Behavioral</strong>{" "}
                                                sciences
                                            </h2>
                                        </div>
                                        <div className="title-desc">
                                            <p>
                                                <b>
                                                    We deliver professional training to the next generation of
                                                    therapists&nbsp; and provide clinical services face to face.
                                                </b>
                                            </p>
                                            <p>
                                                We provide a range of affordable{" "}
                                                <u>
                                                    <a href="couple-counselling.html">counselling</a>
                                                </u>{" "}
                                                &amp;{" "}
                                                <u>
                                                    <a href="troubling-emotions.html">psychotherapy</a>
                                                </u>{" "}
                                                services which support clients experiencing challenges in
                                                their relationships, their sexual lives and their parenting.
                                                we undertake research, service development and policy&nbsp;
                                                activities which encourage the development and growth.
                                            </p>
                                        </div>
                                    </div>
                                    {/*section title end*/}
                                    <div className="ttm-horizontal_sep mt-25 mb-20" />
                                    <div className="row ttm-vertical_sep">
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                            {/*featured-icon-box*/}
                                            <div className="featured-icon-box icon-align-before-title">
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                        <i className="flaticon flaticon-doctor-1" />
                                                    </div>
                                                </div>
                                                <div className="featured-title">
                                                    <h5>
                                                        The Expert
                                                        <br />
                                                        Doctors
                                                    </h5>
                                                </div>
                                            </div>
                                            {/*featured-icon-box end*/}
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-sm-6">
                                            {/*featured-icon-box*/}
                                            <div className="featured-icon-box icon-align-before-title">
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                        <i className="flaticon flaticon-mind" />
                                                    </div>
                                                </div>
                                                <div className="featured-title">
                                                    <h5>
                                                        Solution For Mental
                                                        <br />
                                                        Illness
                                                    </h5>
                                                </div>
                                            </div>
                                            {/*featured-icon-box end*/}
                                        </div>
                                    </div>
                                    <div className="ttm-horizontal_sep mt-10 mb-10" />
                                    <div className="d-sm-flex align-items-center">
                                        <a
                                            className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-darkgrey mr-20 mt-10"
                                            href="about1.html"
                                        >
                                            More About US
                                        </a>
                                        {/*featured-icon-box*/}
                                        <div className="featured-icon-box icon-align-before-content icon-ver_align-top style17">
                                            <div className="featured-icon">
                                                <img
                                                    className="img-fluid"
                                                    src="images/author.png"
                                                    alt="ttm_single_image-wrapper"
                                                />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h5>Alex Sam Martin</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Professional Counselor</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*featured-icon-box end*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                </div>
            </section>

            <section className="ttm-row team-member-section clearfix">
                <div className="container">
                    {/*row*/}
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                            {/*section-title*/}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h5>TEAM MEMBER</h5>
                                    <h2 className="title">
                                        Meet our specialist <strong>Doctors!</strong>
                                    </h2>
                                </div>
                            </div>
                            {/*section-title end*/}
                        </div>
                    </div>
                    {/*row end*/}
                    {/* row */}
                    <div className="row mb_15">
                        <div className="col-lg-12">
                            <div className="ttm-tabs ttm-tab-style-02">

                                <div className="content-tab">
                                    {/* content-inner */}
                                    <div className="row isotope-project">
                                        <div className="col-lg-3 col-md-6 col-sm-6 project_item">
                                            {/* featured-imagebox-team */}
                                            <div className="featured-imagebox featured-imagebox-team style1">
                                                <div className="ttm-box-view-overlay">
                                                    <a href="team-details.html" className="media-btn" tabIndex={0}>
                                                        <i className="ti ti-plus" />
                                                    </a>
                                                    <div className="featured-thumbnail">
                                                        <img className="img-fluid" src="images/team-member/team-img01.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="featured-content box-shadow">
                                                    <div className="featured-title">
                                                        <h5><a href="team-details.html">Luis Em Hodge</a></h5>
                                                    </div>
                                                    <p className="category">Wedding Stylist</p>
                                                    <div className="featured-iconbox ttm-media-link">
                                                        <ul className="social-icons list-inline">
                                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                                                            <li className="social-google-plus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 project_item">
                                            {/* featured-imagebox-team */}
                                            <div className="featured-imagebox featured-imagebox-team style1">
                                                <div className="ttm-box-view-overlay">
                                                    <a href="team-details.html" className="media-btn" tabIndex={0}>
                                                        <i className="ti ti-plus" />
                                                    </a>
                                                    <div className="featured-thumbnail">
                                                        <img className="img-fluid" src="images/team-member/team-img01.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="featured-content box-shadow">
                                                    <div className="featured-title">
                                                        <h5><a href="team-details.html">Luis Em Hodge</a></h5>
                                                    </div>
                                                    <p className="category">Wedding Stylist</p>
                                                    <div className="featured-iconbox ttm-media-link">
                                                        <ul className="social-icons list-inline">
                                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                                                            <li className="social-google-plus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 project_item">
                                            {/* featured-imagebox-team */}
                                            <div className="featured-imagebox featured-imagebox-team style1">
                                                <div className="ttm-box-view-overlay">
                                                    <a href="team-details.html" className="media-btn" tabIndex={0}>
                                                        <i className="ti ti-plus" />
                                                    </a>
                                                    <div className="featured-thumbnail">
                                                        <img className="img-fluid" src="images/team-member/team-img01.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="featured-content box-shadow">
                                                    <div className="featured-title">
                                                        <h5><a href="team-details.html">Luis Em Hodge</a></h5>
                                                    </div>
                                                    <p className="category">Wedding Stylist</p>
                                                    <div className="featured-iconbox ttm-media-link">
                                                        <ul className="social-icons list-inline">
                                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                                                            <li className="social-google-plus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 project_item">
                                            {/* featured-imagebox-team */}
                                            <div className="featured-imagebox featured-imagebox-team style1">
                                                <div className="ttm-box-view-overlay">
                                                    <a href="team-details.html" className="media-btn" tabIndex={0}>
                                                        <i className="ti ti-plus" />
                                                    </a>
                                                    <div className="featured-thumbnail">
                                                        <img className="img-fluid" src="images/team-member/team-img01.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="featured-content box-shadow">
                                                    <div className="featured-title">
                                                        <h5><a href="team-details.html">Luis Em Hodge</a></h5>
                                                    </div>
                                                    <p className="category">Wedding Stylist</p>
                                                    <div className="featured-iconbox ttm-media-link">
                                                        <ul className="social-icons list-inline">
                                                            <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                                                            <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                                                            <li className="social-google-plus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        {/* Repeat same structure for each team member */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <TestimonialSection/>
        </>
    )
}

export default Home
