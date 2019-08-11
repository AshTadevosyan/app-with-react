import React from 'react';
import { updateNewMessageBodyCreator,sendMessageCreator  } from '../../redux/dialogs_reducer/dialogs_reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{

     return {
       messagesPage: state.messagesPage
     }
}
let mapDispatchToProps = (dispatch) =>{

    return {
      updateNewMessageBody: ()=>{
        dispatch(sendMessageCreator());
      },
      sendMessageClick: (body)=>{
        dispatch(updateNewMessageBodyCreator(body));
     }
   }
}
const DialogsContainer = connect( mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;