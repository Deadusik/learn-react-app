import React from "react";
import module from './WhiteButton.module.css';

const WhiteButton = ({ children, ...props }) => {

    return (
        <button className={module.whiteButton} {...props}>{children}</button>
    );
}

export default WhiteButton;