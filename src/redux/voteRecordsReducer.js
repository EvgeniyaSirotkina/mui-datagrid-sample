import { SET_FUNDLIST, SET_VOTERECORDS } from "./types";

const initialState = {
    fundList: [],
    voteRecords: []
}

export const voteRecordsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VOTERECORDS: 
            return { ...state, voteRecords: action.payload };
        case SET_FUNDLIST: 
            return { ...state, fundList: action.payload };
        default:
            return state;
    }
}