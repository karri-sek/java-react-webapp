import {takeEvery, call, put} from "redux-saga/effects";

export default function* watcherSaga(){
    yield takeEvery("DATA_SAGA_REQUESTED", workerSaga);
}

function* workerSaga(){
    try{
        const payload = yield call(getDataFromSaga);
        yield put({type: "SAGA_DATA_LOADED", payload});
    }catch(e){
        yield put({type: "API_ERRORED", payload: e});
    }
}

function getDataFromSaga() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
}