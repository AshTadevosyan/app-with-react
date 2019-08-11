const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
  dialogsData:[
   {id:1,name:"Ash"},
   {id:2,name:"Tik"},
   {id:3,name:"And"}
],
  messageData :[
   {message:"Hi how are you",id:1},
   {message:"Oh very nice", id:2},
   {message:"Its my first post", id:3}
  
],
newMessageBody: ''
};

function dialogsReducer(state=initialState,action){
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:{
                let stateCopy = {...state};
                stateCopy.newMessageBody = action.body;
                return stateCopy;
        }
        case SEND_MESSAGE:{
                let stateCopy = {...state};
                let body = state.newMessageBody;
                stateCopy.newMessageBody = '';
                stateCopy.messageData.push({id: 6, message: body})
                return stateCopy;
        }
                default:
                    return state;
    }
}

export function sendMessageCreator(){
    return{type: SEND_MESSAGE}
  }
export function updateNewMessageBodyCreator(body){
    return{type: UPDATE_NEW_MESSAGE_BODY , body: body}
  }
    
export default dialogsReducer;