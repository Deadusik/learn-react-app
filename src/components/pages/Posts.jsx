import React, { useState, useEffect, useRef } from 'react';
import PostForm from '../PostForm';
import '../../styles/App.css';
import PostList from '../PostList';
import PostFilter from '../PostFilter';
import SimpleModal from '../UI/modals/SimpleModal';
import WhiteButton from '../UI/buttons/WhiteButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import SwitchBar from '../SwitchBar';
import { useObserver } from '../hooks/useObserver';
import SimpleSelect from '../UI/select/SimpleSelect';

function Posts() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Java Script - Programming language" },
        { id: 2, title: "C#", body: "C# - Programming language" },
        { id: 3, title: "HTML", body: "HTML - Not programming language" }
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostsLoading, fetchError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });
    const lastElement = useRef();

    let pagesArray = getPagesArray(totalPages);

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts();
    }, [page, limit]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const setPageCallback = (pageNumber) => {
        setPage(pageNumber);
    }

    return (
        <div className="app">
            <WhiteButton
                onClick={() => setModal(true)}
                style={{ minWidth: '150px', margin: '10px auto' }}>
                Create post
            </WhiteButton>

            <SimpleModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </SimpleModal>

            <hr style={{ margin: '15px 30px' }} />

            <PostFilter
                filter={filter}
                setFilter={setFilter}
                style={{ margin: 'auto' }} />
            <SimpleSelect
                style={{ margin: 'auto ' }}
                value={limit}
                onChange={value => { if (!isNaN(parseInt(value))) setLimit(value) }}
                defaultValue='Count posts on page'
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 20, name: '20' },
                    { value: -1, name: 'all' }
                ]} />
            {fetchError && <h1 style={{ margin: 'auto' }}>Fetching error: ${fetchError}</h1>}
            {isPostsLoading &&
                <Loader style={{ margin: 'auto', marginTop: '20px' }} />
            }
            <PostList
                posts={sortedAndSearchedPosts}
                remove={removePost}
            />
            <div ref={lastElement} style={{ height: 20, background: 'red', width: '60%', margin: 'auto' }}></div>
            <SwitchBar
                setPage={setPageCallback}
                style={{ marginTop: '20px', marginBottom: '20px' }}
                currentPage={page}
                countPages={pagesArray} />
        </div>
    );
}

export default Posts;
