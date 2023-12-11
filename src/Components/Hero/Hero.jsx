import { motion } from "framer-motion"
import './Hero.scss';
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Kirttinath Ojha</h2>
          <h1>Web Developer & UI Designer</h1>
          <div className="buttons">
            <button>See the latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>

      <div className="imageContainer">
        <img src="/me.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
