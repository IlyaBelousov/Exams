import React from 'react';
import './App.css';
import {Settings} from './components/Settings';
import Counter from './components/Counter';



function App() {
    return (
        <div className="container">
            <Settings className={'setting'} buttonValue={'SET'}/>
            <Counter/>
        </div>
    );
}

export default App;


