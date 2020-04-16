import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {contas} from './contas';

ReactDOM.render(
  <React.StrictMode>
    <App contas={contas}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
