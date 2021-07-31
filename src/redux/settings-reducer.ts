import {useEffect} from 'react';
import {store} from './store';
import {Dispatch} from 'redux';

export const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE';
export const CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE';
export const SET_CHANGES = 'SET_CHANGES';

export type InitialStateType = typeof InitialState
const InitialState = {
    value: 0,
    maxValue: 1,
    minValue: 0,
    setButton: false,
    setting: false,
    error: false
};
export type SettingActionType = ReturnType<typeof ChangeMaxValueAC>
    & ReturnType<typeof ChangeMinValueAC>
    & ReturnType<typeof SetChangesAC>
export const SettingsReducer = (state: InitialStateType = InitialState, action: SettingActionType): InitialStateType => {
    switch (action.type) {
        case CHANGE_MAX_VALUE: {
            if ((action.maxNumber === state.minValue || state.minValue < 0) || state.minValue > action.maxNumber) {
                return {
                    ...state,
                    error: state.error = true,
                    setButton: state.setButton = true,
                    setting: state.setting = false,
                    maxValue: action.maxNumber,
                };
            } else return {
                ...state,
                setButton: state.setButton = true,
                setting: state.setting = false,
                maxValue: action.maxNumber,
                error: state.error = false
            };
        }
        case CHANGE_MIN_VALUE: {

            if ((action.minNumber === state.maxValue
                || state.maxValue < 0)
                || state.maxValue < action.minNumber
                || action.minNumber < 0) {
                return {
                    ...state,
                    error: state.error = true,
                    setButton: state.setButton = true,
                    setting: state.setting = false,
                    minValue: action.minNumber,
                };
            } else return {
                ...state,
                setButton: state.setButton = true,
                setting: state.setting = false,
                minValue: action.minNumber,
                error: state.error = false
            };
        }
        case SET_CHANGES: {
            return {
                ...state,
                setButton: state.setButton = false,
                setting: state.setting = true,
            };
        }
        default: {
            return state;
        }
    }
};


export const ChangeMaxValueAC = (maxNumber: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        maxNumber: maxNumber,
    };
};
export const ChangeMinValueAC = (minNumber: number) => {
    return {
        type: CHANGE_MIN_VALUE,
        minNumber: minNumber
    };
};
export const SetChangesAC = () => {
    return {
        type: SET_CHANGES
    };
};

export const ChangeMaxValueTC = (maxNumber: number) => (dispatch: Dispatch) => {
    localStorage.setItem('maxValue',JSON.stringify(maxNumber))
    dispatch(ChangeMaxValueAC(maxNumber))
};
export const ChangeMinValueTC = (minNumber: number) => (dispatch: Dispatch) => {
    localStorage.setItem('minValue',JSON.stringify(minNumber))
    dispatch(ChangeMinValueAC(minNumber))
};