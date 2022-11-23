import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import '../styles/PostList.module.css';
import Post from './Post';

export default function PostList({ posts, remove }) {
    if (!posts.length)
        return (
            <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Posts were not found</h1>
        );

    return (
        <div className={module.postList}>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post">
                        <Post
                            key={post.id}
                            number={index + 1}
                            post={post}
                            style={{ margin: '10px auto auto auto' }}
                            remove={remove} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}
