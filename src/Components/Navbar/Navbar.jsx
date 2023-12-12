import "./Navbar.scss"
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>KOjha</motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/kirttinath-ojha/"><img src="/linkedin.png" alt="" /></a>
            <a href="https://github.com/Kirttinath"><img src="/github.png" alt="" /></a>
            <a href="https://www.facebook.com/kirttinath.ojha.3"><img src="/facebook.png" alt="" /></a>
            <a href="https://www.instagram.com/kirtti_nath/"><img src="/instagram.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
