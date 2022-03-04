import React from 'react';
import logo_app from "../../assets/images/logo_app_r.svg"
import styles from '../Dashboard/Dashboard.module.css'
import { motion, AnimatePresence } from "framer-motion";

const LoadingIcon = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.relative}>
                {/* <div className={styles.loadingCenter}> */}
                <img src={logo_app} className={styles.loadingIcon} alt="logo Selfer" />
                <AnimatePresence>
                    <motion.div
                        className={styles.loadingBackground}>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 360],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],

                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 1
                            }}>
                        </motion.div>
                    </motion.div>
                </AnimatePresence >
                {/* </div> */}
            </div>
        </div>
    );
};

export default LoadingIcon;