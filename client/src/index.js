import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    {/* add store to app */}
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
