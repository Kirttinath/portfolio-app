import { motion } from "framer-motion"
import './Hero.scss';
const Hero = () => {
  return (
    <div className="hero">
      <div className="textContainer">
        <h2>Kirttinath Ojha</h2>
        <h1>Web Developer & UI Designer</h1>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
