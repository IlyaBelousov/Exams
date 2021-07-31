import React from 'react';
import './App.css';
import {CounterContainer} from './components/Counter';
import { SettingsContainer } from './components/Settings';


function App() {

    return (
        <div className="container">
            <SettingsContainer className={'setting'} buttonValue={'SET'}/>
            <CounterContainer/>
        </div>
    );
}

export default App;


