import React from 'react'
import module from './Loader.module.css'

const Loader = (props) => {
    return (
        <div {...props} className={module.Loader}></div>
    );
}

export default Loader;