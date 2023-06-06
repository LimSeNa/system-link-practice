import {combineReducers} from "redux";
import signup, {signupSaga} from "./signup";
import loading from "./loading";
import {all} from 'redux-saga/effects';
import member, {memberSaga} from "./member";

const rootReducer = combineReducers({
    signup,
    loading,
    member,
});

export function* rootSaga() {
    yield all([signupSaga(), memberSaga()]);
}

export default rootReducer;