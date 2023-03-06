import React from 'react';
import stl from './MyPosts.module.css';
import rustContent from '../../../rustContent.jpeg';
import MyOnePost from '../MyPosts/MyOnePost/MyOnePost';

const MyPosts = () => {
    return (
        <div className={stl.posts}>
            <div>
                <img src={rustContent} className={stl.rust} alt="rust"/>
            </div>
            <div className={stl.item}>
                <img className={stl.postsAva} src="https://www.meme-arsenal.com/memes/a323140cb815b9f6334d34303bb35d93.jpg" alt="avatar"/>
                + Description
            </div>
            <div>
                <h4>
                    My posts )))
                </h4>
                <textarea name="post" id="areaPost" cols="30" rows="4" placeholder='Please enter your post...'>
                </textarea>
                <button>Add post</button>
            </div>
            <MyOnePost/>
        </div>
    );
};

export default MyPosts;