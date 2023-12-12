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
            <h1>Unique <b>Ideas</b></h1>

        </div>
        <div className="title">
            <h1><b>About My </b>Study.</h1>
            <button>What I do ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet. Ut nesciunt molestias in temporibus maxime non ullam consectetur qui voluptate velit eos dolor sunt sit voluptatum ipsa est numquam repudiandae. Vel consectetur consequatur aut velit illum hic nisi earum qui sint sunt et consequatur provident qui accusamus autem. Aut tenetur voluptatum et doloribus</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet. Ut nesciunt molestias in temporibus maxime non ullam consectetur qui voluptate velit eos dolor sunt sit voluptatum ipsa est numquam repudiandae. Vel consectetur consequatur aut velit illum hic nisi earum qui sint sunt et consequatur provident qui accusamus autem. Aut tenetur voluptatum et doloribus </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet. Ut nesciunt molestias in temporibus maxime non ullam consectetur qui voluptate velit eos dolor sunt sit voluptatum ipsa est numquam repudiandae. Vel consectetur consequatur aut velit illum hic nisi earum qui sint sunt et consequatur provident qui accusamus autem. Aut tenetur voluptatum et doloribus </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet. Ut nesciunt molestias in temporibus maxime non ullam consectetur qui voluptate velit eos dolor sunt sit voluptatum ipsa est numquam repudiandae. Vel consectetur consequatur aut velit illum hic nisi earum qui sint sunt et consequatur provident qui accusamus autem. Aut tenetur voluptatum et doloribus </p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Services
