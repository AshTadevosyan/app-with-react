import { createStore, combineReducers } from "redux";
import profileReducer from "./profile_reducer/profile_reducer";
import dialogsReducer from "./dialogs_reducer/dialogs_reducer";

let reducers = combineReducers({
profilePage: profileReducer,
messagesPage: dialogsReducer
});

let store = createStore(reducers);

export default store;