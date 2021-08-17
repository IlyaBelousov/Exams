import React, {ChangeEvent} from 'react';
import '../App.css';
import {Button} from './Button';
import {SettingsWindow} from './SettingsWindow';
import { useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../redux/store';
import {ChangeMaxValueAC, ChangeMinValueAC, InitialStateType, SetChangesAC} from '../redux/settings-reducer';

type SettingPropsType = {
    className: string
    buttonValue: string
}
export const Settings = (props: SettingPropsType) => {
    const state = useSelector<AppStateType, InitialStateType>(state => state.settings);
    const dispatch = useDispatch();
    const CallBack = () => {
        dispatch(SetChangesAC());
    };
    const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeMinValueAC(+e.currentTarget.value));
    };
    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeMaxValueAC(+e.currentTarget.value));
    };
    return (
        <div className="wrapper">
            <div className="inner">
                <SettingsWindow
                    minValue={state.minValue}
                    maxValue={state.maxValue}
                    onMinChangeHandler={onMinChangeHandler}
                    onMaxChangeHandler={onMaxChangeHandler}
                    error={state.error}/>

                <div className="buttons">
                    <Button
                        error={state.error}
                        startValue={state.minValue}
                        setButton={state.setButton}
                        setting={state.setting}
                        callBack={CallBack}
                        value={state.value}
                        className={props.className}
                        buttonValue={props.buttonValue}
                        limitValue={state.maxValue}/>
                </div>
            </div>

        </div>
    );
};


