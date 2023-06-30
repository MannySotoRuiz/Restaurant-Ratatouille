"use client";

import { FC } from "react";
import { Fade } from "react-awesome-reveal";

interface FadeTextAnimationProps {
    direction: "up" | "down" | "left" | "right";
    children: React.ReactNode;
    duration?: 1000 | number;
    delay?: 0 | number;
}

const FadeTextAnimation: FC<FadeTextAnimationProps> = ({
    children,
    duration = 1000,
    delay = 0,
    direction,
}) => {
    return (
        <Fade
            direction={direction}
            duration={duration}
            triggerOnce
            damping={1}
            delay={delay}
        >
            {children}
        </Fade>
    );
};

export default FadeTextAnimation;
