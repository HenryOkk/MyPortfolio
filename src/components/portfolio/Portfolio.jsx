import React from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
	{
		id: 1,
		title: "Good Mail",
		img: "../../../goodmail.png",
		desc: "Good Mail is the web app that can help you build a better version of your draft email into a professional and polished message!",
		demoLink: "https://goodmail-chatgpt.netlify.app/",
	},
	{
		id: 2,
		title: "Original Land Survey Explorer",
		img: "../../../Original Land Survey Explorer.png",
		desc: "The Original Land Survey Explorer is an innovative solution aimed at making historical survey notes easily accessible on the State Cartographer's Office (SCO) website. The primary goal is to overcome the complexities of accessing these notes, which currently require specialized knowledge of townships, thereby posing a barrier to the general public. We simplify this process with an intuitive map interface that allows users to zoom in, click on a survey line, and access a wealth of information, including Scanned original survey notes image and Summary information based on the original survey notes transcription.",
		demoLink: "https://github.com/WIStCart/OriginalLandSurveyExplorer",
	},
	{
		id: 3,
		title: "Gateway - AWS Project",
		img: "../../../AWS.png",
		desc: "Deploying and managing a WordPress application, similar to Airbnb, on Amazon Web Services (AWS) with a strong focus on ensuring high availability, scalability, and fault tolerance. The website is no longer active due to ongoing billing issues.",
		demoLink: "https://aws.amazon.com/verification",
	},
	{
		id: 4,
		title: "BarkMeow",
		img: "../../../Bark.png",
		desc: "Built a full-featured eCommerce platform using MERN stack with Redux Toolkit. Managed end-to-end development, including server setup, data modeling, UI design, and authentication with JWT. Key features: responsive shopping cart, product reviews, pagination, and admin functionalities. Integrated seamless checkout with PayPal and credit card payments. Utilized React-Bootstrap for UI components and followed best practices for global state management.",
		demoLink: "https://barkmeow.onrender.com/",
	},
	{
		id: 5,
		title: "Badger Sports",
		img: "../../../badger.png",
		desc: "Badger Sports News Archives, a responsive and user-friendly website providing extensive archival access to current information on 6+ University of Wisconsin athletics.",
		demoLink: "https://badgersportsnews.netlify.app",
	},
	{
		id: 6,
		title: "Welcome Home",
		img: "../../../home.png",
		desc: "Welcome Home is an innovative web application designed to connect compassionate individuals with shelter dogs in need of a loving home. This platform empowers users to easily access comprehensive information about available dogs while incorporating a seamless chat functionality. ",
		demoLink: "https://github.com/HenryOkk/WelcomeHome",
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="imageContainer" ref={ref}>
						<img src={item.img} alt="" />
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button>
							<a href={item.demoLink} target="_blank">
								See Demo
							</a>
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>Featured Works</h1>
				<motion.div
					style={{ scaleX }}
					className="progressBar"></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};
export default Portfolio;
