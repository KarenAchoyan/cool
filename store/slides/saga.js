
import {takeLatest, call, put} from 'redux-saga/effects';
import {
    getSlides,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

// Slide Sagas
function* fetchSlidesSaga({payload = {}}) {
    try {
        const response = yield call(() => axiosInstance.get('/sliders', payload));
        const slides = response.data.data;
        yield put(getSlides.success(slides));
    } catch (error) {
        yield put(getSlides.failure(error.message));
    }
}

// Slide Watcher Saga
export function* slideSaga() {
    yield takeLatest(getSlides.request, fetchSlidesSaga);
}
