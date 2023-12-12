import "./Portfolio.scss";
import { motion, useScroll } from "framer-motion";

const items = [
    {
        id:1,
        title:"E-Commerce",
        img: "./ecom.png",
        des:"A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
    {
        id:1,
        title:"E-Commerce",
        img: "./ecom.png",
        des:"A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
    {
        id:1,
        title:"E-Commerce",
        img: "./ecom.png",
        des:"A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
    {
        id:1,
        title:"E-Commerce",
        img: "./ecom.png",
        des:"A React e-commerce project is a project that uses React to build the user interface for an e-commerce website or app. This could include features such as a product catalog, a shopping cart, and a checkout process.",
    },
];

const Single = ({item}) => {

    return (
        <section>
         {item.title}
        </section>
    );

};



const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <div className="progressbar">

            </div>

        </div>
      {items.map(item => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
