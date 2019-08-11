import React from 'react';
import Class from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

function Dialogs(props){
    
    let state = props.messagesPage;

    let dialogsElement = state.dialogsData.map(dialog =><DialogItem name={dialog.name} id={dialog.id} />);
    let messageElement = state.messageData.map(message =><MessageItem message={message.message} id={message.id}/>);
    let newMessageBody = state.newMessageBody;
   
    function onSendMessageClick(){
        props.sendMessageClick();
     }

    function onNewMessageChange(e){
        let body = e.target.value;
        props.updateNewMessageBody(body);
     }

    return(

        <div className={Class.dialogs}>
            <div className={Class.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={Class.messages}>
                <div>{messageElement}</div>
                <div>
                  <div>
                  <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message' />
                  </div>
                  <div>
                  <button onClick={ onSendMessageClick } >Send Message</button>
                  </div>
                </div>
            </div>
        </div>
    );
}




export default Dialogs;