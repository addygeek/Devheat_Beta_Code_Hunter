import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//import { configureStore } from './app/store';
import store from './app/store';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import './index.css';

//const container = document.getElementById('root');
//const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
