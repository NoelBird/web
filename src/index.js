import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

// mobx
import { configure } from "mobx";
import { Provider } from "mobx-react";

// stores
import testStore from "./stores/testStore";

import App from './App';
import "./index.css";

import * as serviceWorker from './serviceWorker';

const stores = {
  testStore,
}

// FOR easier debugging
window._____APP_STATE_____ = stores

// mobx4에서 useStrict를 사용하기 위한 코드
configure({ enforceActions: "always" })

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
