import { useRef,useState,useEffect } from "react";
import { NavLink,useHistory } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
 import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Nav } from "reactstrap";
import Swiper from 'swiper';
import Image from "next/image";
import Link from 'next/link';
// import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper/core";

// Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

//assets
// import about from "../src/assets/image/about-banner.png";
import about from "../src/assets/image/about-banner.png";

import feature from "../src/assets/image/feature.png";
import featureXs from "../src/assets/image/feature-mockup.png";
import about2 from "../src/assets/image/about/jayesh-narani.png";
import signature from "../src/assets/image/about/signature.png"
// import about2Xs from "../src/assets/image/about/jayesh-narani-mobile.png";

import testimonial from "../src/assets/image/testimonial.png";
import testimonial2 from "../src/assets/image/lucy.png";
import testimonial3 from "../src/assets/image/raj.png";

import yourStoryLogo from "../src/assets/image/yourStoryLogo.png";
import dhLogo from "../src/assets/image/dhLogo.png";
import magicBrickLogo from "../src/assets/image/magicBrickLogo.png";
import hflLogo from "../src/assets/image/hflLogo.png";
import startupUrbanLogo from "../src/assets/image/startupUrbanLogo.png";
// import { homePageUrl, statusIndia } from "../../module/Constant";
import {Helmet} from "react-helmet";



function Home() {


	
return (
	<main>
	

		<section>
		{/* <Container>
					<Breadcrumb className="bs-breadcrumb">
					<BreadcrumbItem>
		<Link href={'/google.com'} >
            <a >
                Home
            </a>
        </Link>
		</BreadcrumbItem>
		</Breadcrumb>
		</Container> */}
				<Container>
					<Breadcrumb className="bs-breadcrumb">
						<BreadcrumbItem>
							<a>
								Home
							</a>
						</BreadcrumbItem>
						<BreadcrumbItem active>
								About Us
						</BreadcrumbItem>
					</Breadcrumb>
				</Container>
			</section>


		{/* banner start */}
		<section className="lyt-section">
			<Container>
				<div className="mod-about-banner">
					<Row>
						<Col lg={{ size: 5, offset: 1}} md={6} sm={12} xs={12}>
							<div className="tag-line">
								<Row>
									<Col lg={12} md={12} sm={12} xs={12}>
										<Row>
											<Col lg={10} md={10} sm={12} xs={12}>
												<div className="text">
													{/* <p className="content">"TAP.SHARE.NETWORK your details instantly"</p> */}
													<p className="content">&quot;OnetapHELLO - Nifty Digital Networking tool&quot;</p>
												</div>
											</Col>
										</Row>
										<p className="description">OnetapHELLO is a networking tool that allows you to exchange your digital business card by simply tapping on any smartphone. It is the next-gen power move in communications and a revolution in the art of Networking. With OnetapHELLO, any brand/business/individual can master the art of ‘Sharing’ any information digitally. The brand offers a unique ‘Sharing Platform’ and a smart business tag that is best-in-class and a budget-friendly. Powered by a robust team, OnetapHELLO aims to make ‘Networking easier than ever before’.</p>
									</Col>
								</Row>
							</div>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>
							<div className="image">
								<picture>
									<source media="(max-width:767px)" srcSet={about} />
									<Image src={about} alt="About Us" />
								</picture>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
		{/* banner end */}

		{/* feature start */}
		<section className="lyt-section bg-gray">
			<h2 className="bs-heading typ-secHead">Features</h2>
			<Container>
				<div className="bs-feature">
					<Row className="align-items-center">
						<Col lg={4} md={12} sm={12}>
							<div className="highlights">
								<div className="content">
									<span>No App Sync required to receive information.</span>
									<div className="image">
										<div className="img-border">
											<div className="background">
												<i className="icon icon-share"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="content">
									<span>iOS and Android compatibility.</span>
									<div className="image">
										<div className="img-border">
											<div className="background">
												<i className="icon icon-mobile"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="content">
									<span>100% encrypted, low-cost and efficient maintenance.</span>
									<div className="image">
										<div className="img-border">
											<div className="background">
												<i className="icon icon-ShieldCheck"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={4} md={12} sm={12}>
							<div className="banner">
								<picture>
									<source media="(max-width:767px)" srcSet={featureXs} />
									<Image src={feature} alt="Feature"/>
								</picture>
							</div>
						</Col>
						<Col lg={4} md={12} sm={12}>
							<div className="highlights typ-right">
								<div className="content">
									<div className="image">
										<div className="img-border">
											<div className="background">
												<i className="icon icon-credit-card"></i>
											</div>
										</div>
									</div>
									<span>Integrations - Social|Business|Payment Apps.</span>
								</div>
								<div className="content">
									<div className="image">
										<div className="img-border">
											<div className="background">
												<i className="icon icon-contact-book"></i>
											</div>
										</div>
									</div>
									<span>Instant, Simplified & Preference-based Networking.</span>
								</div>
								<div className="content">
								<div className="image">
										<div className="img-border">
											<div className="background">
												<i className="icon icon-monitor"></i>
											</div>
										</div>
									</div>
									<span>Social media traffic analysis.</span>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
		{/* feature end */}
		

		<section className="lyt-section">
			<Container>
				<div className="mod-about-sec">
					<Row className="align-items-center">
						<Col lg={{size:5, offset: 1}} md={{size:5, order: 1}} sm={{size:12, order: 2}} xs={{size:12, order: 2}} >
							<h2 className="bs-heading typ-left typ-blue">Jayesh Narani</h2>
							<p className="designation">Founder/CEO - OnetapHELLO</p>
							<p className="description">“I believe in recognizing opportunities and seizing them to create an unstoppable tomorrow for a better world.”</p>
							<p className="description"> Jayesh Narani is the founder & CEO of OnetapHELLO - a superlative innovation in the field of Networking. As a visionary with a purpose, Mr. Narani is committed towards creating pathways aligned with trends and technology, aspires to set bench-marks in ‘Technology’ through defining changes.</p>
							<picture>
								<source media="(max-width:767px)" srcSet={signature} />
								<Image src={signature} alt="About Us" />
							</picture>
						</Col>
						
						<Col lg={{size: 5, offset: 1}} md={{size: 7, order: 2}} sm={{size:12, order: 1}} xs={{size:12, order: 1}
					}>
							<div className="image">	
								<picture>
									<source media="(max-width:767px)" srcSet={about2} />
									<Image src={about2} alt="About Us" />
								</picture>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
		<section className="lyt-section bg-gray">
			<div >
				<div className="bg-opacity bg-gray"></div>
				<div className="arrow prev" >
					<i className="icon icon-arrow-left"></i>
				</div>
				<div className="arrow next" >
					<i className="icon icon-arrow-right"></i>
				</div>
				<Container>
					<div className="bs-testimonial">
						<h2 className="bs-heading typ-testimonial">Testimonial</h2>
						<div>
							<Row>
							
										<div className="card">
											<div className="image">
												<Image src={testimonial} alt="Slider" />
											</div>
											<div className="content">
												<p className="name">Adam Joseph</p>
												{/*  i use   ------------&apos;-------- for apostrophe for ex i'm , i use this because when i creat e build it will return error <react/no-unscaped-entities> */}
												<p className="description">  I&apos;m self-employed! Being able to pull out my card that sends them all my social media is great! There are times where I&apos;m out and don&apos;t have time to wait for someone to pull up their Instagram or Facebook etc.</p>
											</div>
										</div>
							
										<div className="card">
											<div className="image">
												<Image src={testimonial2} alt="Slider" />
											</div>
											<div className="content">
												<p className="name">Lucy Carla</p>
												<p className="description">OnetapHELLO is an excellent tool for networking, load up your info, and you’re good to go. Connect with people on the fly without the worry of needing to stop and input or dictate your story.</p>
											</div>
										</div>
									
										<div className="card">
											<div className="image">
												<Image src={testimonial3} alt="Slider" />
											</div>
											<div className="content">
												<p className="name">Raj Malhotra</p>
												<p className="description">This card is just what I was looking for. It comes in handy when you run out of business cards or when you don&apos;t happen to have one on you. Better than business cards, My business partner and I love our hellos! We have saved a ton on not buying business cards!</p>
											</div>
										</div>
								
							</Row>
						</div>
					</div>
				</Container>
			</div>
		</section>

	</main>
);
}

export default Home;
