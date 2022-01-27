import { combineReducers } from 'redux';
import { voteRecordsReducer } from './voteRecordsReducer';

export const rootReducer = combineReducers({
    tumeloFakeData: voteRecordsReducer
});