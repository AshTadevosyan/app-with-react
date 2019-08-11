import React from 'react';
import { addPostCreator ,updateNewPostTextCreator} from '../../../redux/profile_reducer/profile_reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) =>{
    return {
       postData: state.profilePage.postData,
       newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
       updateNewPostText: (text) =>{
           let action = updateNewPostTextCreator(text);
           dispatch(action);
       },
       addPost: () =>{
           dispatch(addPostCreator ());
       }
    }
}
const MyPostContainer = connect( mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostContainer;