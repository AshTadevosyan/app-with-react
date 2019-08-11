import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Profile from './component/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './component/Dialogs/DialogsContainer';

function App(props) {
    return (  
         <div className="app-wrapper">
           <Header/>
           <Nav/>
           <div className="app-wrapper-content">
              <Route path="/dialogs"  
                     render={ () => <DialogsContainer />}/>
              <Route path="/profile"  
                     render={ () => <Profile />}/>
           </div>
         </div>  
    );
}

export default App;  