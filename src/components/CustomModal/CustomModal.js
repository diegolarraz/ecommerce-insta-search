import React from "react";

import classes from './CustomModal.module.css'

const CustomModal = (props) => {
    const { 
        position = "static",
        top = "0px",
        bottom,
        children,
        isActive,
        setActive
    } = props;

    // This function closes the modal when the 
    // background is clicked - stopPropagation 
    // needed to alow clicks on the modal body
    
    const closeModal = (event) => {
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
                    <div className={classes.Modal} onClick={(e) => {    
                        closeModal(e)
                    }}>
                        <div 
                            style={{ 
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
