import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './styles/landing.css';
import './styles/popup.css';


function landingPage() {
    return(
        <div className="grid-container">
            <Header />
            <Main />

        </div>
    );
}

export default landingPage;
