import React from 'react';

type ButtonPropsType = {
    value: number
    buttonValue: string
    callBack: () => void
    className: string
    limitValue: number
    startValue: number
    setButton: boolean
    setting: boolean
    error: boolean

}

export const Button = (props: ButtonPropsType) => {

    const isDisabledButton = () => {
        if (!props.setting &&
            (props.buttonValue === 'INC' && props.value === props.limitValue) ||
            (props.buttonValue === 'RESET' && props.value <= props.startValue)) {
            return true;
        } else if (props.setButton &&
            (props.buttonValue === 'INC' && props.value === props.limitValue) ||
            (props.buttonValue === 'RESET' && props.value <= props.startValue)) {
            return false;
        } else if (props.setButton && props.buttonValue !== 'SET') {
            return true;
        } else if (props.error) {
            return true;
        } else if ((props.buttonValue === 'INC' && props.value === props.limitValue) ||
            (props.buttonValue === 'RESET' && props.value <= props.startValue)) {
            return true;
        } else if ((props.setButton && props.buttonValue === 'SET')) {
            return false;
        } else if ((!props.setButton && props.buttonValue === 'SET')) {
            return true;
        }
    };

    return (
        <button
            onClick={props.callBack}
            disabled={isDisabledButton()}
            className={
                isDisabledButton() ? 'disable' : `${props.className}`
            }>
            {props.buttonValue}
        </button>
    );
};

/*
!props.setButton||!props.setting ||
(props.buttonValue === 'INC' && props.value === props.limitValue) ||
(props.buttonValue === 'RESET' && props.value <= props.startValue) ?
    'disable' : `${props.className}`*/
