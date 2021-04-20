import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div>
        <img src='https://st2.depositphotos.com/1030327/12301/i/950/depositphotos_123015928-stock-photo-scenic-view-of-lake-with.jpg' />
        <div>
            avatar+descriptoin
        </div>
        <MyPosts />
    </div>
}
export default Profile;