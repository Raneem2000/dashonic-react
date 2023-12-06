import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import './Css/components/loading.css'
import './Css/components/button.css'
import './Css/components/alerts.css'
import './Pages/Website/Auth/Auth.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Css/components/google.css';
import MenuContext from './Context/MenuContext';
import WindowContext from './Context/WindowContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindowContext>
    <MenuContext>
    <Router>
    <App />
    </Router>
    </MenuContext>
    </WindowContext>
  </React.StrictMode>
);

