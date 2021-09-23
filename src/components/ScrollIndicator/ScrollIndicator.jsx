import React from 'react';
import scroll from 'assets/img/ui/scroll.png';
import { motion } from 'framer-motion';

import './ScrollIndicator.scss';
import { scroller } from 'react-scroll';

export const ScrollIndicator = (props) => {
    // const animationStyles = useSpring({
    //     loop: { reverse: true },
    //     from: { bottom: "60px" },
    //     to: { bottom: "40px" },
    //     config: {
    //         duration: 500,
    //         easing: t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    //     }
    // })

    const scrollToProjects = () => {
        console.log("fk");
        scroller.scrollTo("projects", { duration: 500, smooth: true })
    }

    return (
        <div className="scroll-indicator-container">
            <motion.img
                alt=""
                className="scroll-indicator"
                src={scroll}
                width={50}
                height={50}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.5,
                    type: "tween",
                    ease: "easeInOut"
                }}
                animate={{ bottom: 60 }}
                onClick={scrollToProjects}
            />
        </div>
    )
}