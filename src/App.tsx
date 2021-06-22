import React, {useState} from 'react';
import './App.css';
import ExamTest from './components/ExamTest';

export type ExamTestType = {
    value: number
    CounterValue: () => void
    ResetValue: () => void
    limitValue: number
}

function App() {
    let [value, setValue] = useState(0);

    const CounterValue = () => {
        setValue(++value);
    };

    const ResetValue = () => {
        setValue(0);
    };

    const limitValue = 5;

    return (
        <ExamTest
            limitValue={limitValue}
            value={value}
            CounterValue={CounterValue}
            ResetValue={ResetValue}
        />
    );
}

export default App;
