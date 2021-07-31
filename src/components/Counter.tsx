import React from 'react';
import {CounterWindow} from './CounterWindow';
import {Button} from './Button';
import {AppStateType} from '../redux/store';
import {Dispatch} from 'redux';
import {IncCounterValueAC, ResetCounterValueAC} from '../redux/counter-reducer';
import {connect} from 'react-redux';

type CounterPropsType = ReturnType<typeof MapStateToProps>&ReturnType<typeof MapDispatchToProps>

const Counter = (props: CounterPropsType) => {
    return (
        <div className="wrapper">
            <div className="inner">
                <CounterWindow
                    error={props.error}
                    setting={props.setting}
                    limitValue={props.limitValue}
                    value={props.value}/>
                <div className="buttons">
                    <Button
                        error={props.error}
                        setting={props.setting}
                        setButton={props.setButton}
                        startValue={props.startValue}
                        limitValue={props.limitValue}
                        buttonValue={'INC'}
                        value={props.value}
                        callBack={props.CounterValue}
                        className={'increment'}
                    />
                    <Button
                        error={props.error}
                        setting={props.setting}
                        setButton={props.setButton}
                        startValue={props.startValue}
                        limitValue={props.limitValue}
                        buttonValue={'RESET'}
                        value={props.value}
                        callBack={props.ResetValue}
                        className={'reset'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Counter;


const MapStateToProps = (state: AppStateType) => {
    return {
        error: state.counter.error,
        setting: state.counter.setting,
        setButton: state.counter.setButton,
        limitValue: state.counter.limitValue,
        value: state.counter.value,
        startValue: state.counter.startValue,
    };
};
const MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        CounterValue: () => {
            dispatch(IncCounterValueAC());
        },
        ResetValue: () => {
            dispatch(ResetCounterValueAC());
        }
    };

};

export const CounterContainer=connect(MapStateToProps,MapDispatchToProps)(Counter)