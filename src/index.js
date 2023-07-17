import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import background from "./components/assets/background1.png";

ReactDOM.render(
    <BrowserRouter>
    <App  style={{backgroundImage:`url(${background})`}}/>
    </BrowserRouter>,
    document.getElementById('root')
);

