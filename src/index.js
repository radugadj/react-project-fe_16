import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> origin/developer

import App from './App';

import './styles/index.scss';



ReactDOM.render(
<<<<<<< HEAD
        <Router>
            <App />
        </Router>,  
=======
    
    <BrowserRouter>
    <App />
</BrowserRouter>,  

>>>>>>> origin/developer
document.getElementById('root'));

