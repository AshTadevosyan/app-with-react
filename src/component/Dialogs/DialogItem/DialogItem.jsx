import React from 'react';
import Class from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

function DialogItem(props){
    let path = "/dialogs/" + props.id;
  
    return(
    <div className={`${Class.dialog} ${Class.active}`}>
    <NavLink to={path} activeClassName={Class.active}>{props.name}</NavLink>
    </div>
    )
  }

  export default DialogItem