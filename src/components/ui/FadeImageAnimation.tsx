"use client";

import { FC } from "react";
import { Fade } from "react-awesome-reveal";

interface FadeImageAnimationProps {
    children: React.ReactNode;
    duration?: 1000 | number;
    delay?: 0 | number;
}

const FadeImageAnimation: FC<FadeImageAnimationProps> = ({
    children,
    duration = 1000,
    delay = 0,
}) => {
    return (
        <Fade
            duration={duration}
            triggerOnce
            damping={1}
            delay={delay}
        >
            {children}
        </Fade>
    );
};

export default FadeImageAnimation;
