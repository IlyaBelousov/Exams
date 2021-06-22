import React from 'react';
import {ExamTestType} from '../App';
import {Counter} from './Counter';
import {Button} from './Button';

const ExamTest = (props: ExamTestType) => {
    return (
        <div className="wrapper">
            <div className="inner">
                <Counter value={props.value}/>
                <div className="buttons">
                    <Button
                        limitValue={props.limitValue}
                        buttonValue={'INC'}
                        value={props.value}
                        callBack={props.CounterValue}
                        className={'increment'}
                    />
                    <Button
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

export default ExamTest;
