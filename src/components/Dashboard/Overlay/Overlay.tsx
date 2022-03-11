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

type InfoModalProps = {
    emoji: string,
    children: React.ReactNode
}

export const InfoModal = ({ emoji = "ℹ️", children }: InfoModalProps) => {
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
                        <span>{emoji}</span>
                        <div className={styles.modalContent}>{children}</div>
                        <span>{emoji}</span>
                    </div>
                </div>
            }
        </>
    );
};

