import React, { useEffect, useState } from "react";

import classes from './CustomModal.module.css'

const CustomModal = (props) => {
    const { 
        h = "425px",
        w = "328px",
        position = "static",
        top = "0px",
        bottom,
        children,
        isActive,
        setActive
    } = props;

    const handleClick = (event) => {
        event.cancelBubble = true;
        if (event.stopPropagation) event.stopPropagation();
    }

    return (
        <div>
            {isActive && (
                <div 
                    className={classes.Overlay} 
                    onClick={() => setActive(false)}
                >
                    <div className={classes.Modal} style={{height: h}} onClick={(e) => {    
                        handleClick(e)
                    }}>
                        <div 
                            style={{ height: h, 
                                      width: w, 
                                      position: position, 
                                      top: top, 
                                      bottom: bottom
                                    }} 
                            className={classes.ModalContent}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomModal;
