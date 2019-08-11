import React from 'react';
import Class from "./MessageItem.module.css";

function MessageItem(props){
    return(
      <div className={Class.dialog}>{props.message}</div>
    )
 }

 export default MessageItem