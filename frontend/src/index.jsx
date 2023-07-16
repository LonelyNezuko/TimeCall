import React from 'react';
import $ from 'jquery'
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from 'react-router-dom'

import './index.css'

import './utils/hint.js'

import Layout from './layout'

import AccountPage from './pages/account/account'
import AuthenticationPage from './pages/authentication/authentication'
import DialogsPage from './pages/dialogs/dialogs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <section id="body">
            <Layout />

            <section className="wrapper">
                <Routes>
                    <Route exact path='/' element={< DialogsPage />}></Route>
                    <Route exact path='/account' element={< AccountPage />}></Route>
                    <Route exact path='/authentication' element={< AuthenticationPage />}></Route>
                </Routes>
            </section>
        </section>
    </Router>
);