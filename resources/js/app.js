require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
 import Main from './Router';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
   
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    ,
    document.getElementById('index')
  );

