const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState =  {
  postData: [
   {message:"Hi how are you?",id:1},
   {message:'Fine thank you,and you?',id:1}
],
  newPostText: 'hello'
};

function profileReducer(state = initialState ,action){
   switch(action.type){
       case ADD_POST:{
                let newPost = {
                      id:5,
                      message:state.newPostText
                };
                let stateCopy = {...state};
                stateCopy.postData.push(newPost);
                stateCopy.newPostText= '';
                return stateCopy;
              }
       case UPDATE_NEW_POST_TEXT:{
                let stateCopy = {...state};
                stateCopy.newPostText=action.newText;
                return stateCopy;
              }
                default: 
                  return state;
     
   } 
}

export function addPostCreator(){
    return{ type: ADD_POST }
  }
  export function updateNewPostTextCreator(text){
    return{ type: UPDATE_NEW_POST_TEXT , newText: text }
  }  
  
export default profileReducer;