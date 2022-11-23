import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import { useFetching } from './hooks/useFetching';
import Loader from './UI/Loader/Loader';

const PostFull = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    return (
        <div>
            <h1>It's {params.id} post</h1>
            {
                isLoading ?
                    <Loader />
                    :
                    <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {
                isCommentsLoading ?
                    <Loader />
                    :
                    comments.map((comment, index) =>
                        <div key={index} style={{ marginTop: '15px' }}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )
            }

        </div>
    );
}

export default PostFull;