import React from 'react';
import Class from './Post.module.css';

function Post(props){
    return(
            <div className={Class.posts}>
               <div className={Class.item}>
                 <img src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" /> 
                 {props.message}
               </div>
            </div>
    )
}

export default Post;