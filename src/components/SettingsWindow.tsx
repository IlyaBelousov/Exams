import React, {ChangeEvent} from 'react';


type SettingWindowPropsType = {
    error: boolean
    maxValue: number
    minValue: number
    onMinChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onMaxChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SettingsWindow = (props:SettingWindowPropsType) => {
    return (
        <div className='settingWindow'>
            <div className="value">
                <span>Max Value</span>
                <input className={props.error?'inputErrorMax':'inputSet'}
                       value={props.maxValue}
                       onChange={props.onMaxChangeHandler} type="number"/>
            </div>
            <div className="value">
                <span>Start Value</span>
                <input className={props.error?'inputErrorMin':'inputSet'}
                       value={props.minValue}
                       onChange={props.onMinChangeHandler}
                       type="number"/>
            </div>
        </div>
    );
};

