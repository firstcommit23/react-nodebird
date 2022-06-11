import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
    yield all([fork(postSaga), fork(userSaga)]);
}

/*
 const gen = function* () {
 console.log(1);
 yield;
 console.log(2);
 yield;
 console.log(3);
 yield 4;

 let i = 0;
 while(true) { 

     yield i++;
 }
 }
const g = gen();
 get.next();
 */
