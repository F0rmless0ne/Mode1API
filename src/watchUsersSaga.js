import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_ACCOUNTS, getAccountsSuccess, showNotification } from './usersActions';
import { accountsRef } from 'firebase-adminsdk-pjx31@mode1api.iam.gserviceaccount.com'; // Update with the correct path to your Firebase accounts reference

function* getAccounts() {
  try {
    const snapshot = yield call([accountsRef, accountsRef.once], 'value');
    const data = snapshot.val();
    yield put(getAccountsSuccess(data));
  } catch (error) {
    yield put(showNotification(error.message));
  }
}

export function* watchUsersSaga() {
  yield takeEvery(GET_ACCOUNTS, getAccounts);
}

import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_ROOMS, getRoomsSuccess, showNotification } from './roomsActions';
import { roomsRef } from 'path-to-firebase-rooms-ref'; // Update with the correct path to your Firebase rooms reference

function* getRooms() {
  try {
    const snapshot = yield call([roomsRef, roomsRef.once], 'value');
    const data = snapshot.val();
    yield put(getRoomsSuccess(data));
  } catch (error) {
    yield put(showNotification(error.message));
  }
}

export function* watchUsersSaga() {
  yield takeEvery(GET_ROOMS, getRooms);
}
