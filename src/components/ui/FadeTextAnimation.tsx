"use client";

import { FC } from "react";
import { Fade } from "react-awesome-reveal";

interface FadeTextAnimationProps {
    direction: "up" | "down" | "left" | "right";
    children: React.ReactNode;
    duration?: 1000 | number;
    delay?: 0 | number;
    cascade?: boolean;
}

const FadeTextAnimation: FC<FadeTextAnimationProps> = ({
    children,
    duration = 1000,
    delay = 0,
    direction,
    cascade = false,
}) => {
    return (
        <Fade
            cascade={cascade}
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
