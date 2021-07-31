import React, {ChangeEvent} from 'react';
import '../App.css';
import {Button} from './Button';
import {SettingsWindow} from './SettingsWindow';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../redux/store';
import {ChangeMaxValueAC, ChangeMinValueAC, SetChangesAC} from '../redux/settings-reducer';

type SettingPropsType = ReturnType<typeof MapStateToProps> &
    ReturnType<typeof MapDispatchToProps> & {
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
                        startValue={props.minValue}
                        setButton={props.setButton}
                        setting={props.setting}
                        callBack={props.callBack}
                        value={props.value}
                        className={props.className}
                        buttonValue={props.buttonValue}
                        limitValue={props.maxValue}/>
                </div>
            </div>

        </div>
    );
};
const MapStateToProps = (store: AppStateType) => {
    return {
        value: store.settings.value,
        maxValue: store.settings.maxValue,
        minValue: store.settings.minValue,
        setButton: store.settings.setButton,
        setting: store.settings.setting,
        error: store.settings.error,
    };
};
const MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        ChangeMaxValue: (maxNumber: number) => {
            dispatch(ChangeMaxValueAC(maxNumber));
        },
        ChangeMinValue: (minNumber: number) => {
            dispatch(ChangeMinValueAC(minNumber));
        },
        callBack: () => {
            dispatch(SetChangesAC());
        },
    };
};


export const SettingsContainer = connect(MapStateToProps, MapDispatchToProps)(Settings);

