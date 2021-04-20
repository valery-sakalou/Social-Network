import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.content}>
        <div>
            My posts
        </div>
        <textarea></textarea>
        <button>Add post</button>
        <div>
            New post
        </div >
        <div className={s.posts}>
            <Post message='Hi!' like='5' />
            <Post message="It's my first post" like='10'/>
        </div>
    </div>
}
export default MyPosts;