import "./Sidebar.scss"
import ToogleButton from './ToogleButton/ToogleButton';
import Links from './Links/Links';
import { useState } from "react";


const Sidebar = () => {

  const [open, setOpen] = useState(false);

  const variants = {
    open: 
    closed: 
  }
  return (
    <div className="sidebar">
      <div className="bg">
        <Links/>
      </div>
      <ToogleButton setOpen={setOpen}/>
    </div>
  )
}

export default Sidebar
