import "./Contact.scss";
import { motion } from "framer-motion";
import contact from "../../../src/contact.svg"

const variants = {
  initial: {
      y: 500,
      opacity:0
  },
  animate: {
    y: 0,
    opacity:1,
    transition:{
     duration:0.5,
     staggerChildren:0.1,
    },
  },
};




const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>kirttinathojha000@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Sailashree Vihar-6</span>
        </motion.div>
        <motion.div className="item" variants={variants} >
          <h2>Phone</h2>
          <span>+91 8114888187</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="contactSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}}>
          <img src={contact} alt="" />
          </motion.div>
        
        <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4, duration:1}}>
          <input type="text" required placeholder="Name"/>
          <input type="email" required placeholder="E-mail"/>
          <textarea  rows={8} placeholder="Message" />
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
