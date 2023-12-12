import { useRef } from 'react';
import './Projects.scss';
import { color, motion, useInView } from 'framer-motion';


const variants={
  initial: {
    x: -500,
    y:100,
    opacity:0,
  },
  animate:{
   x:0,
   opacity: 1,
   y: 0,
   transition:{
    duration: 1,
    staggerChildren: 0.1,
   },
  },
};


const Services = () => {

   const ref = useRef();
  const isInView = useInView(ref, {margin:"-100px"});
  return (
    <motion.div 
    className="services" 
    variants={variants} 
    initial="initial" 
    //whileInView="animate"
    ref={ref}
    animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>

        <p>Know pain, Feel pain and Accept pain<br/>Those who don&apos;t know the pain will never understand true Peace</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/ppl.png" alt="" />
            <h1>Know <motion.b whileHover={{color:"orange"}}>Ideas</motion.b></h1>

        </div>
        <div className="title">
            <h1><motion.b whileHover={{color:"orange"}}>About </motion.b>Me.</h1>
            <button>What I do ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Coding</h2>
            <p>Coding work is a dynamic and intellectually engaging field, where I craft solutions through programming languages. It involves me in problem-solving, innovation, and constant learning. Whether developing software, building websites, or optimizing algorithms, coding empowers me to create, improve, and shape the digital landscape, driving progress and technological innovation.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Designing</h2>
            <p>Designing work is a captivating fusion of creativity and functionality, where I bring ideas to life through visual storytelling. Crafting compelling visuals, user interfaces, and experiences, I strive to strike a balance between aesthetics and usability. Designing work is my passion, enabling me to transform concepts into impactful and meaningful creations.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Reading</h2>
            <p>Reading is my escape into diverse worlds and perspectives. It's a journey of discovery, expanding my knowledge and empathy. Whether immersed in fiction's captivating narratives or non-fiction's wisdom, reading fuels my imagination and nurtures a lifelong love for learning. It's a gateway to enlightenment, connecting me to countless ideas and cultures.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Travelling</h2>
            <p>Traveling is a transformative journey, an exploration of cultures, landscapes, and oneself. It transcends boundaries, offering moments of awe and connection for me. Whether seeking adventure or solace, each destination becomes a chapter in a personal odyssey, enriching life's narrative.</p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
