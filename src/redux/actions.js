import { SET_FUNDLIST, SET_VOTERECORDS } from './types';

export function setVoteRecords(records) {
    return {
        type: SET_VOTERECORDS,
        payload: records
    }
}

export function setFundList(records) {
    return {
        type: SET_FUNDLIST,
        payload: records
    }
}