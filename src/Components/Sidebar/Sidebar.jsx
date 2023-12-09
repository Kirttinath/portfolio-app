import "./Sidebar.scss"
import ToogleButton from './ToogleButton/ToogleButton';
import Links from './Links/Links';
import { useState } from "react";
import { motion } from "framer-motion";


const Sidebar = () => {

  const [open, setOpen] = useState(false);

  const variants = {
    open: 
    closed: 
  }
  return (
    <motion.div className="sidebar">
      <div className="bg">
        <Links/>
      </div>
      <ToogleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
