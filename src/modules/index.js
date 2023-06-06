import {combineReducers} from "redux";
import signup, {signupSaga} from "./signup";
import loading from "./loading";
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    signup,
    loading,
});

export function* rootSaga() {
    yield all([signupSaga()]);
}

export default rootReducer;