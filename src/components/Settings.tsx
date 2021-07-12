import React, {ChangeEvent} from 'react';
import '../App.css';
import {Button} from './Button';
import {SettingsWindow} from './SettingsWindow';

type SettingPropsType = {
    minValue: number
    maxValue: number
    ChangeMaxValue: (maxNumber: number) => void
    ChangeMinValue: (minNumber: number) => void
    callBack: () => void
    setButton: boolean
    error: boolean
    value: number
    limitValue: number
    startValue: number
    setting: boolean
    className: string
    buttonValue: string
}


const Settings = (props: SettingPropsType) => {
    const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.ChangeMinValue(+e.currentTarget.value);
    };
    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.ChangeMaxValue(+e.currentTarget.value);
    };
    return (
        <div className="wrapper">
            <div className="inner">
                <SettingsWindow
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    onMinChangeHandler={onMinChangeHandler}
                    onMaxChangeHandler={onMaxChangeHandler}
                    error={props.error}/>

                <div className="buttons">
                    <Button
                        error={props.error}
                        startValue={props.startValue}
                        setButton={props.setButton}
                        setting={props.setting}
                        callBack={props.callBack}
                        value={props.value}
                        className={props.className}
                        buttonValue={props.buttonValue}
                        limitValue={props.limitValue}/>
                </div>
            </div>

        </div>
    );
};

export default Settings;


/*
disabled={!props.setButton}
className={!props.setButton?'disableSetButton':'setButton'}
onClick={props.SetChanges}>Set</button>*/
