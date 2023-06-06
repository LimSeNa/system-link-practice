import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as registerAPI from "../lib/api/register";
import {takeLatest} from 'redux-saga/effects';

const CHANGE_INPUT = 'signup/CHANGE_INPUT';

const [REGISTER_POST, REGISTER_POST_SUCCESS, REGISTER_POST_FAILURE] = createRequestActionTypes(
    'signup/REGISTER_POST',
);

export const changeInput = createAction(
    CHANGE_INPUT,
    ({key, value}) => ({key, value})
);

export const registerPost = createAction(
    REGISTER_POST,
    ({email, password, nickname}) => ({email, password, nickname})
);

const registerPostSaga = createRequestSaga(REGISTER_POST, registerAPI.registerPost);
export function* signupSaga() {
    yield takeLatest(REGISTER_POST, registerPostSaga)
};

const initialState = {
    email: '',
    password: '',
    nickname: '',
    signup: null,
    signupError: null,
};

const signup = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload: {key, value}}) =>
            produce(state, draft => {
            draft[key] = value; // 예: state.email 변경
        }),
        [REGISTER_POST_SUCCESS]: (state, {payload: signup}) => ({
            ...state,
            signupError: null,
            signup,
        }),
        [REGISTER_POST_FAILURE]: (state, {payload: error}) => ({
            ...state,
            signupError: error,
        })
    },
    initialState
);

export default signup;

