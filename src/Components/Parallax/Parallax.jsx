import { useRef } from "react";
import "./Parallax.scss";
// import "../../../public/vidbg.mp4";
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({ type }) => {

    const ref = useRef();

 const {scrollYprogress} = useScroll({
    target:ref
 });


 const yBg = useTransform(scrollYprogress, [0,1], ["0%", "100%"])
    return (
        <div className="parallax"
        ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : "linear-gradient(180deg, #111132, #505064)"
            }}
        >
            <motion.h1>{type === "services" ? "What I do?" : "What I did?"}</motion.h1>
            <motion.div className="mountains">
            </motion.div>
            <motion.div className="planets"></motion.div>
            <motion.div className="stars"></motion.div>
        </div>
    )
}

export default Parallax
