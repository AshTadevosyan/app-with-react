import React from 'react';
import Class from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostContainer';


function Profile(props) {
    
    return ( 
        <div className={Class.profile}>
           <ProfileInfo />
           <MyPostContainer />
                             
           </div>
       
    )
}

export default Profile