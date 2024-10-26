import { takeLatest, call, put } from 'redux-saga/effects';
import {
    getTeachers,
    getTeacher,   // Import getTeacher actions
} from './actions';
import axiosInstance from 'configs/axiosIntance';

// Fetch multiple teachers saga
function* fetchTeachersSaga({ payload = {} }) {
    try {
        const response = yield call(() => axiosInstance.get('/teachers', payload));
        const teachers = response.data.data;
        yield put(getTeachers.success(teachers));
    } catch (error) {
        yield put(getTeachers.failure(error.message));
    }
}

// Fetch single teacher saga
function* fetchTeacherSaga({ payload }) {
    try {
        const response = yield call(() => axiosInstance.get(`/teachers/${payload.id}`));
        const teacher = response.data.data;
        yield put(getTeacher.success(teacher));
    } catch (error) {
        yield put(getTeacher.failure(error.message));
    }
}

export function* teacherSaga() {
    yield takeLatest(getTeachers.request, fetchTeachersSaga);   // Watch for multiple teachers
    yield takeLatest(getTeacher.request, fetchTeacherSaga);     // Watch for single teacher
}
