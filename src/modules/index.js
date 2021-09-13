import { combineReducers } from 'redux';
import counter from './counter';
import todos from './totos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
