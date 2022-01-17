import React, { useContext } from 'react';
import DataContext from '../../../contexts/DataContext';
import classes from '../Dashboard.module.css'

const Overlay = () => {
    const dataCtx = useContext(DataContext);

    function onClick() {
        dataCtx.setOverlayActive(!dataCtx.overlayActive)
    }

    return (
        <div className={classes.overlay}
            onClick={onClick}>
        </div>
    );
};

export default Overlay;