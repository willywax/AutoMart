import React from 'react';
import Filter from '../components/Filters';
import Content from '../components/Content';

function Main(){
    return (
        <main className="main flex-column">
            <Filter />

            <Content />
        </main>
    )
}

export default Main;