import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

const CHANGE_INPUT = 'signup/CHANGE_INPUT';

export const changeInput = createAction(
    CHANGE_INPUT,
    ({key, value}) => ({key, value})
);

const initialState = {
    email: '',
    password: '',
    nickname: ''
};

const signup = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload: {key, value}}) =>
            produce(state, draft => {
            draft[key] = [value]; // 예: state.email 변경
        })
    },
    initialState
);

export default signup;

