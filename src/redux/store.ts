import {applyMiddleware, combineReducers, createStore} from 'redux';
import {SettingsReducer} from './settings-reducer';
import {CounterReducer} from './counter-reducer';
import {loadState, saveState} from '../utils/localstorage';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    settings: SettingsReducer,
    counter: CounterReducer,
});
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));
store.subscribe(() => {
    saveState({
        settings: store.getState().settings,
        counter: store.getState().counter,
    });
});
export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>;


