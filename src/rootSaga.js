const sagasList = [
    usersSaga,
    roomsSaga,
  ];
  export default function* watchRootSaga() {
    yield all(sagasList.map((saga) => call(saga)))
  }

