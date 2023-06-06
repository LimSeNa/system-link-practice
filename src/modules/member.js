import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {takeLatest} from 'redux-saga/effects';
import * as removeAPI from "../lib/api/remove";

const INSERT = 'member/INSERT';

const OUT = 'member/DELETE';

const [MEMBER_REMOVE, MEMBER_REMOVE_SUCCESS, MEMBER_REMOVE_FAILURE] = createRequestActionTypes(
    'member/MEMBER_REMOVE'
);

let id = 2;
export const insert = createAction(INSERT, ({email, password, nickname}) => ({
    id: id++,
    email,
    password,
    nickname
}));

export const out = createAction(OUT, id => ({id}));

const initialState = {
    members: [
        {
            id: 1,
            email: 'tpsk8322@naver.com',
            password: '1234',
            nickname: 'sena'
        }
    ],
    member: null,
    memberError: null,
};

export const memberRemove = createAction(
    MEMBER_REMOVE,
    ({id}) => ({id}));

const memberRemoveSaga = createRequestSaga(MEMBER_REMOVE, removeAPI.memberRemove);
export function* memberSaga() {
    yield takeLatest(MEMBER_REMOVE, memberRemoveSaga)
}

const member = handleActions(
    {
        [INSERT]: (state, {payload: member}) => ({
            ...state,
            members: state.members.concat(member),
        }),
        [OUT]: (state, {payload: {id}}) => ({
            ...state,
            members: state.members.filter(member => member.id !== id),
        }),
        [MEMBER_REMOVE_SUCCESS]: (state, {payload: member}) => ({
            ...state,
            memberError: null,
            member,
        }),
        [MEMBER_REMOVE_FAILURE]: (state, {payload: error}) => ({
            ...state,
            memberError: error,
        })
    },
    initialState,
);

export default member;