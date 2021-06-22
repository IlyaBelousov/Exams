import React from 'react';

export type CounterType={
    value:number
}

export const Counter = (props:CounterType) => {
    return (
        <div className={props.value === 5 ? 'limit' : 'counter'}>{props.value}</div>
    );
};

