import React, { useEffect, useRef } from "react";
import {useAnimation, useInView, motion } from "framer-motion";
import encryption from "../../assets/videos/encryption.webm";
import map from "../../assets/images/map.png";
import mapbg from "../../assets/images/map-bg.png";
import StatBox_component from './StatBox_component';
import './StatBox.css'

export default function StatBox() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControlls = useAnimation();

    useEffect(() => {
        if (isInView) {
          mainControlls.start("visible");
        }
      }, [isInView, mainControlls]);

  return (
    <div className="stat-box-container">
        <motion.div
            ref={ref}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -75 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 1, delay: 0.25 }} 
            className=".stat-box:first-child"
            >
            <StatBox_component targetNumber={1500} description="Companies Helped"/>
        </motion.div>
        <motion.div
            ref={ref}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 1, delay: 0.25 }} 
            className="stat-box:nth-child(2)"

            >
            <StatBox_component targetNumber={30} target_style={"%"} description="Average Performance Increase"/>
        </motion.div>
        <motion.div
            ref={ref}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 75 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 1, delay: 0.25 }} 
            className=""
            >
            <StatBox_component targetNumber={80} target_style={"%"} description="Companies Purchase Again"/>
        </motion.div>
    </div>
  )
}
