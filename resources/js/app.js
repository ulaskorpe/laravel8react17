require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
 import Main from './Router';

import { BrowserRouter } from 'react-router-dom';
import Store from "./Store";
import { Provider } from "mobx-react";
ReactDOM.render(
  <Provider {...Store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      </Provider>
    ,
    document.getElementById('index')
  );

