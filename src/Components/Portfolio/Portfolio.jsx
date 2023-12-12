import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "E-Commerce",
        img: "./ecom.png",
        desc: "A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
    {
        id: 2,
        title: "Foody-Zone",
        img: "./food.png",
        desc: "FoodyZone React project, I spearheaded the development of an immersive and user-friendly food-related application. Leveraging React's component-based architecture, I meticulously designed and implemented intuitive user interfaces"
    },
    {
        id: 3,
        title: "Weather-App",
        img: "./weather.png",
        desc: "Integrating with a weather API, I implemented real-time data fetching and dynamic rendering, ensuring accurate and up-to-date information."
    },
    {
        id: 4,
        title: "Speech-to-Text",
        img: "./s2t.png",
        desc: "The application embodies simplicity, making it an inclusive and versatile solution for users to effortlessly transcribe spoken content into written form.",
    },
];

const seePrj = (projectId) => {
    return (

        <div>
            if(projectId === 1){
                
                window.location.href ="https://e-commerce-app-rose.vercel.app/"
            }
            else if(projectId === 2){
                
                window.location.href ="https://github.com/Kirttinath/foody-zone-app"
            }
            else if(projectId === 3){
                
                window.location.href ="https://weather-app-dun-eta.vercel.app/"
            }
            else{
                
                window.location.href ="https://text-to-speech-app-jet.vercel.app/"
            }
        </div>
    );
  };

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });
   

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])


    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>

                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => seePrj(item.id)}>See App</button>
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
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })


    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>

            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
