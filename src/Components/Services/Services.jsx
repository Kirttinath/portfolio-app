import './Services.scss';
import { motion } from 'framer-motion';


const Services = () => {
  return (
    <div className="services">
      <motion.div className="textContainer">

        <p>Know pain, Feel pain and Accept pain<br/>Those who do not know the pain will never understand true Peace</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1><b>Unique </b>Ideas</h1>

        </div>
        <div className="title">
            <h1><b>About My </b>Study.</h1>
            <button>What I do ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
            <h2>Branding</h2>
            <p>kirtti</p>
            <button>Go</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p>kirtti</p>
            <button>Go</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p>kirtti</p>
            <button>Go</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p>kirtti</p>
            <button>Go</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Services
