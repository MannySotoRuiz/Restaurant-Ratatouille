"use client";

import { FC, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealProps {
    children: JSX.Element;
    startingY?: "100px" | string;
}

const Reveal: FC<RevealProps> = ({ children, startingY = "100px" }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    const animation = useAnimation();
    const [viewed, setViewed] = useState(false);

    useEffect(() => {
        if (!viewed) {
            if (inView) {
                animation.start({
                    y: 0,
                    transition: {
                        type: "spring",
                        duration: 1.5,
                        bounce: 0.1,
                    },
                    opacity: 1,
                });
                setViewed(true);
            }
            if (!inView) {
                animation.start({ y: startingY, opacity: 0 });
            }
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <motion.div animate={animation}>{children}</motion.div>
        </div>
    );
};

export default Reveal;
