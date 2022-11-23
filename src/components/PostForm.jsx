import React, { useState } from 'react';
import WhiteButton from './UI/buttons/WhiteButton';
import PostTextInput from './UI/inputs/PostTextInput';
import module from '../styles/PostForm.module.css';

const PostForm = ({ create, ...props }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const createPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...post,
        }
        create(newPost);
    }

    return (
        <form {...props} className={module.postForm}>
            <h1 className={module.title}>Add Post</h1>
            <PostTextInput
                onChange={e => setPost({ ...post, title: e.target.value })}
                value={post.title}
                placeholder='Enter title' />
            <PostTextInput
                onChange={e => setPost({ ...post, body: e.target.value })}
                value={post.body}
                placeholder='Enter description'
                style={{ marginTop: '3px' }} />
            <WhiteButton
                style={{ marginTop: '3px' }}
                onClick={createPost}>Content</WhiteButton>
        </form>
    );
}

export default PostForm;

