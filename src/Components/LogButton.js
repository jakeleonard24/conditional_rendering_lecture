import React, { Component } from 'react';

function LogButton (props){
    
    return   (
            <div>
                <button onClick={props.loginClick}>{props.isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>
        );
    }


export default LogButton;