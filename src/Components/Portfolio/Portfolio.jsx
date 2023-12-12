import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";


const items = [
    {
        id: 1,
        title: "E-Commerce",
        img: "./ecom.png",
        des: "A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
    {
        id: 1,
        title: "E-Commerce",
        img: "./ecom.png",
        des: "A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
    {
        id: 1,
        title: "E-Commerce",
        img: "./ecom.png",
        des: "A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
    {
        id: 1,
        title: "E-Commerce",
        img: "./ecom.png",
        des: "A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
];

const Single = ({ item }) => {

    return (
        <section>
            {item.title}
        </section>
    );

};



const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

   const scaleX = useSpring(scrollYProgress,{
     stiffness: 100,
     damping: 30,
   })


    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressbar">

                </motion.div>

            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
