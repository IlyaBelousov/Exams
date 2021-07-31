import {CHANGE_MAX_VALUE, CHANGE_MIN_VALUE, SET_CHANGES, SettingActionType} from './settings-reducer';

const INC_COUNTER_VALUE = 'INC_COUNTER_VALUE';
const RESET_COUNTER_VALUE = 'RESET_COUNTER_VALUE';
type InitialStateType = typeof InitialState
type ActionsType = ReturnType<typeof IncCounterValueAC>
    & ReturnType<typeof ResetCounterValueAC>
    & SettingActionType
const InitialState = {
    error: false,
    setting: false,
    setButton: false,
    limitValue: 0,
    value: 0,
    startValue: 0,
};
export const CounterReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case CHANGE_MAX_VALUE: {
            if ((action.maxNumber === state.startValue || state.startValue < 0) || state.startValue > action.maxNumber) {
                return {
                    ...state,
                    error: state.error = true,
                    setButton: state.setButton = true,
                    setting: state.setting = false,
                    limitValue: state.startValue=action.maxNumber,
                };
            } else return {
                ...state,
                setButton: state.setButton = true,
                setting: state.setting = false,
                limitValue: state.startValue=action.maxNumber,
                error: state.error = false
            };
        }
        case CHANGE_MIN_VALUE: {
            if ((action.minNumber === state.limitValue
                || state.limitValue < 0)
                || state.limitValue < action.minNumber
                || action.minNumber < 0) {
                return {
                    ...state,
                    error: true,
                    setButton: state.setButton = true,
                    setting: state.setting = false,
                    startValue: state.startValue=action.minNumber,
                };
            } else return {
                ...state,
                setButton: state.setButton = true,
                setting: state.setting = false,
                startValue: state.startValue=action.minNumber,
                error: false
            };
        }
        case SET_CHANGES: {
            return {
                ...state,
                setting: true,
                setButton: false,
                value: state.startValue
            };
        }
        case INC_COUNTER_VALUE: {
            return {
                ...state,
                value: state.value + 1
            };
        }
        case RESET_COUNTER_VALUE: {
            return {
                ...state,
                value: state.startValue,
            };
        }
        default : {
            return state;
        }
    }
};

export const IncCounterValueAC = () => {
    return {
        type: INC_COUNTER_VALUE,
    };
};
export const ResetCounterValueAC = () => {
    return {
        type: RESET_COUNTER_VALUE,
    };
};