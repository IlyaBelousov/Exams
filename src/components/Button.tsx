import React from 'react';

export type ButtonType = {
    value: number
    buttonValue: string
    callBack: () => void
    className: string
    limitValue: number
}

export const Button = (props: ButtonType) => {
    return (
        <button
            onClick={props.callBack}
            disabled={
                (props.buttonValue === 'RESET' && props.value <= 0) ||
                (props.buttonValue === 'INC' && props.value === props.limitValue)}
            className={
                (props.buttonValue === 'INC' && props.value === props.limitValue) ||
                (props.buttonValue === 'RESET' && props.value <= 0) ?
                    'disable' : `${props.className}`
            }>{props.buttonValue}
        </button>
    );
};

