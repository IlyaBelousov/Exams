import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Settings from './components/Settings';


function App() {
    let [value, setValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(1);
    let [minValue, setMinValue] = useState<number>(0);
    let [setButton, setSetButton] = useState(false);
    let [setting, setSetting] = useState(false);
    let [error, setError] = useState(false);
    let limitValue = 0;
    let startValue = 0;

    useEffect(() => {
        let valueAsString1 = localStorage.getItem('startValue');
        if (valueAsString1) {
            let newValue = JSON.parse(valueAsString1);
            setMinValue(newValue);
        }
        let valueAsString2 = localStorage.getItem('limitValue');
        if (valueAsString2) {
            let newValue = JSON.parse(valueAsString2);
            setMaxValue(newValue);
        }
    }, []);


    const CounterValue = () => {
        setValue(++value);
    };

    const ResetValue = () => {
        setValue(minValue);
    };
    const ChangeMaxValue = (maxNumber: number) => {
        setSetButton(true);
        setSetting(false);
        setMaxValue(maxNumber);
        if ((maxNumber === minValue || minValue < 0) || minValue > maxNumber) {
            setError(true);
        } else {
            setError(false);
        }

    };
    const ChangeMinValue = (minNumber: number) => {
        setSetButton(true);
        setSetting(false);
        setMinValue(minNumber);
        if ((maxValue === minNumber || minNumber < 0) || minNumber > maxValue) {
            setError(true);
        } else {
            setError(false);
        }

    };
    const SetChanges = () => {
        setSetting(true);
        setSetButton(false);
        setValue(minValue);
    };

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(minValue));
        localStorage.setItem('limitValue', JSON.stringify(maxValue));
    }, [minValue, maxValue]);

    if (setting) {
        limitValue = maxValue;
        startValue = minValue;
    }

    return (
        <div className="container">
            <Settings
                setting={setting}
                className={'setting'}
                startValue={startValue}
                limitValue={limitValue}
                buttonValue={'SET'}
                callBack={SetChanges}
                value={value}
                error={error}
                setButton={setButton}
                ChangeMaxValue={ChangeMaxValue}
                ChangeMinValue={ChangeMinValue}
                maxValue={maxValue}
                minValue={minValue}/>

            <Counter
                error={error}
                setting={setting}
                setButton={setButton}
                limitValue={limitValue}
                value={value}
                startValue={startValue}
                CounterValue={CounterValue}
                ResetValue={ResetValue}
            />
        </div>
    );
}

export default App;
