import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
    LOG_IN_SUCCESS,
    LOG_IN_REQUEST,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    SING_UP_REQUEST,
    SING_UP_SUCCESS,
    SING_UP_FAILURE,
} from '../reducers/user';

function logInAPI() {
    return axios.post('/api/login');
}

function* logIn(action) {
    try {
        // call: 동기, fork: 비동기(논블로킹)
        //const result = yield call(logInAPI);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout');
}

function* logOut(action) {
    try {
        // call: 동기, fork: 비동기(논블로킹)
        //const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI() {
    return axios.post('/api/signup');
}

function* signUp(action) {
    try {
        // call: 동기, fork: 비동기(논블로킹)
        //const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type: SING_UP_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: SING_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SING_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
