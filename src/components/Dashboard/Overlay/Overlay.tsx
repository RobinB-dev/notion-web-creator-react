import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../../contexts/DataContext';
import styles from './Overlay.module.css'

export const Overlay = () => {
    const dataCtx = useContext(DataContext);

    function onClick() {
        dataCtx.setOverlayActive(!dataCtx.overlayActive)
    }

    return (
        <div className={styles.overlay}
            onClick={onClick}>
        </div>
    );
};

export const InfoModal = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    localStorage.clear();


    function onClick() {
        localStorage.setItem('hideModal', "true")
        if (localStorage.getItem('hideModal') === "true") {
            setIsDisabled(true);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('hideModal') !== "true") {
            setIsDisabled(false);
        }
    }, [])

    return (
        <>
            {!isDisabled &&
                <div className={styles.overlayModal}
                    onClick={onClick}>
                    <div className={styles.modal}>
                        <span>🚧</span>Work in progress.<span>🚧</span>
                    </div>
                </div>
            }
        </>
    );
};
