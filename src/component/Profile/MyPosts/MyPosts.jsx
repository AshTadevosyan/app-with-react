import React from 'react';
import Class from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props){
  let postElement = props.postData.map(post =>  <Post message={post.message} id={post.id} />);
  let newPostElement = React.createRef()
  
  function onAddPost(){
    props.addPost()
  }

  function onPostChange(){
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

     return(

           <div className={Class.MyPosts}>
             <h3>My Posts</h3>
             <textarea onChange = {onPostChange} value = {props.newPostText} ref={newPostElement}/><br />
             <button onClick={onAddPost} >Add Post</button>
             {postElement}
           </div>
       )
}

export default MyPosts