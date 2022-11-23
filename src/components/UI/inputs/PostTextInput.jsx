import React from 'react';
import module from './PostTextInput.module.css';

const PostTextInput = ({ ...props }) => {
    return (
        <input className={module.postTextInput} type='text' {...props} />
    )
}

export default PostTextInput;