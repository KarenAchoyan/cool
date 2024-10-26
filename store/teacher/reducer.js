import { handleActions } from 'redux-actions';
import {
    getTeachers,
    getTeacher,  // Import the new getTeacher actions
} from './actions';

const initialState = {
    teachers: [],        // For multiple teachers
    teacher: null,       // For single teacher
    isFetching: false,
    error: null,
};

const teacherReducer = handleActions(
    {
        // Handle fetching multiple teachers
        [getTeachers.request]: (state) => ({
            ...state,
            isFetching: true,
        }),
        [getTeachers.success]: (state, { payload }) => ({
            ...state,
            teachers: payload,
            isFetching: false,
        }),
        [getTeachers.failure]: (state, { payload }) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),

        // Handle fetching a single teacher
        [getTeacher.request]: (state) => ({
            ...state,
            isFetching: true,
        }),
        [getTeacher.success]: (state, { payload }) => ({
            ...state,
            teacher: payload,
            isFetching: false,
        }),
        [getTeacher.failure]: (state, { payload }) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
    },
    initialState
);

export default teacherReducer;
