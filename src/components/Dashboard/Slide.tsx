import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type SlideProps = {
    children: React.ReactNode,
    isActive: boolean,
    direction: number,
    axe: string,
    distance: number,
    index: number
}

export const Slide = ({ children, isActive, direction = 1, axe = "y", distance = 200, index = 1 }: SlideProps) => {

    return (
        <AnimatePresence>
            {isActive ?
                <motion.div
                    initial={{ opacity: 0, [axe]: direction * (distance * -1) }}
                    animate={{ opacity: 1, [axe]: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {children}
                </motion.div> :
                <motion.div
                    initial={{ opacity: 0.8, [axe]: direction * (distance * -0.03) }}
                    animate={{ opacity: 1, [axe]: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                    {children}
                </motion.div>
            }
        </AnimatePresence>
    );
}
