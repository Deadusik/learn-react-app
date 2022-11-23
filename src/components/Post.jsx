import React from 'react'
import module from '../styles/Post.module.css'
import WhiteButton from './UI/buttons/WhiteButton'
import { useNavigate } from 'react-router-dom'

const Post = ({ number, post, remove, ...props }) => {
    const navigate = useNavigate();
    return (
        <div className={module.post} {...props}>
            <div>
                <h1 className={module.title}>{post.id}.{post.title}</h1>
                <div className={module.body}>{post.body}</div>
            </div>
            <WhiteButton
                style={{ height: '80px', marginLeft: '20px' }}
                onClick={() => navigate(`/posts/${post.id}`)}>
                Open
            </WhiteButton>
            <WhiteButton
                style={{ height: '80px', marginLeft: '20px' }}
                onClick={() => remove(post)}>
                Remove
            </WhiteButton>
        </div>
    );
}

export default Post;
