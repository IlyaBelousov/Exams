import React from 'react';

export type CounterWindowPropsType = {
    value: number
    limitValue: number
    setting: boolean
    error: boolean
}

export const CounterWindow = (props: CounterWindowPropsType) => {
    const RetError = () => {
        if(props.error){
            return <span className='error'>Incorrect value!</span>
        }

        return <span className="text">enter values and press 'set'</span>
    }
    return (
        <div
            className={props.value === props.limitValue && props.limitValue !== 0 ? 'limit' : 'counter'}>
            {props.setting ? props.value :RetError()}

        </div>
    );
};

