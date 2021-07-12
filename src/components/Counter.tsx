import React from 'react';
import {CounterWindow} from './CounterWindow';
import {Button} from './Button';

type CounterPropsType = {
    value: number
    CounterValue: () => void
    ResetValue: () => void
    limitValue: number
    startValue: number
    setButton: boolean
    setting: boolean
    error: boolean
}
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
