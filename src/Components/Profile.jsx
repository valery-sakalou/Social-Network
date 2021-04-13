import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <img src='https://st2.depositphotos.com/1030327/12301/i/950/depositphotos_123015928-stock-photo-scenic-view-of-lake-with.jpg' />
        <div>
            avatar+descriptoin
        </div>
        <div>
            My posts
        </div>
        <div>
            New post
        </div >
        <div className ={s.posts}>
        <div className ={s.item}>
            post1
         </div>
        <div className ={s.item}>
            post2
        </div>
        </div>
    </div>
}
export default Profile;