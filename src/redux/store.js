import profileReducer from "./profile_reducer/profile_reducer";
import dialogsReducer from "./dialogs_reducer/dialogs_reducer";

let store ={

_state:{ 
    profilePage: {
      postData: [
       {message:"Hi how are you?",id:1},
       {message:'Fine thank you,and you?',id:1}
   ],
      newPostText: 'hello'
  },
    messagesPage: {
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
      
  }
    },

getState(){
       return this._state;
    },

_callSubscriber (){
       console.log('state changed')
    },

subscribe(observer){
    this._callSubscriber = (observer)
    },

dispatch(action){  
  this._state.profilePage= profileReducer(this._state.profilePage, action);
  this._state.messagesPage= dialogsReducer(this._state.messagesPage, action);
  this._callSubscriber(this._state);
  
    }
 
}



export default store;