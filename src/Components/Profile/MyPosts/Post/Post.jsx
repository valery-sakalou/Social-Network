import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    //console.log(props.message);
    return <div className={s.item}>
        <img src='https://yt3.ggpht.com/a/AATXAJyBabxZTNDCestY8-CuN1G35jM_pk3Xm-1dnYJQRg=s900-c-k-c0xffffffff-no-rj-mo' />
                 {props.message}
                <div>
                    <span>like {props.like}</span>
                </div>
         </div>
}
export default Post;