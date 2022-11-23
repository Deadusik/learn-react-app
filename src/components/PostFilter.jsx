import React from 'react';
import PostTextInput from './UI/inputs/PostTextInput';
import SimpleSelect from './UI/select/SimpleSelect';

const PostFilter = ({ filter, setFilter, ...props }) => {
    return (
        <div {...props}>
            <PostTextInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Search...' />
            <SimpleSelect
                value={filter.post}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={'Sorting'}
                options={[
                    { value: 'title', name: 'By name' },
                    { value: 'body', name: 'By description' }
                ]} />
        </div>
    );
}

export default PostFilter;