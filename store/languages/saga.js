
import {takeLatest, call, put} from 'redux-saga/effects';
import {
    getLanguages,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchLanguagesSaga({payload = {}}) {
    try {
        const response = yield call(() => axiosInstance.get('/languages', payload));
        const languages = response.data.data;
        yield put(getLanguages.success(languages));
    } catch (error) {
        yield put(getLanguages.failure(error.message));
    }
}

export function* languageSaga() {
    yield takeLatest(getLanguages.request, fetchLanguagesSaga);
}
