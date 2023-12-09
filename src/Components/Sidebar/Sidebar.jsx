import "./Sidebar.scss"
import ToogleButton from './ToogleButton/ToogleButton';
import Links from './Links/Links';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bg">
        <Links/>
      </div>
      <ToogleButton/>
    </div>
  )
}

export default Sidebar
