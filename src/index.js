import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import store from './app/store';
import "./App.css";

ReactDOM.render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));