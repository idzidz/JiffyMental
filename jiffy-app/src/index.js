import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"

// const express = require('express');
// const app = express();
// const cors = require('cors');
//
// app.use(cors());
// app.use(express.json());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App>

        </App>
    </BrowserRouter>
);

