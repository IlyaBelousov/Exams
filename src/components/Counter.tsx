import React from 'react';
import {CounterWindow} from './CounterWindow';
import {Button} from './Button';
import {AppStateType} from '../redux/store';
import {IncCounterValueAC, ResetCounterValueAC} from '../redux/counter-reducer';
import { useDispatch, useSelector} from 'react-redux';
import {InitialStateType} from '../redux/counter-reducer';

export const Counter = () => {
    const state = useSelector<AppStateType, InitialStateType>(state => state.counter);
    const dispatch = useDispatch();
    const IncCounterValue = () => {
        dispatch(IncCounterValueAC())
    };
    const ResetCounterValue = () => {
        dispatch(ResetCounterValueAC());
    };
    return (
        <div className="wrapper">
            <div className="inner">
                <CounterWindow
                    error={state.error}
                    setting={state.setting}
                    limitValue={state.limitValue}
                    value={state.value}/>
                <div className="buttons">
                    <Button
                        error={state.error}
                        setting={state.setting}
                        setButton={state.setButton}
                        startValue={state.startValue}
                        limitValue={state.limitValue}
                        buttonValue={'INC'}
                        value={state.value}
                        callBack={IncCounterValue}
                        className={'increment'}
                    />
                    <Button
                        error={state.error}
                        setting={state.setting}
                        setButton={state.setButton}
                        startValue={state.startValue}
                        limitValue={state.limitValue}
                        buttonValue={'RESET'}
                        value={state.value}
                        callBack={ResetCounterValue}
                        className={'reset'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Counter;
