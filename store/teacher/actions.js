import { createAction } from 'redux-actions';

export const getTeachers = {
    request: createAction('GET_TEACHERS_REQUEST'),
    success: createAction('GET_TEACHERS_SUCCESS'),
    failure: createAction('GET_TEACHERS_FAILURE'),
};

export const getTeacher = {
    request: createAction('GET_TEACHER_REQUEST'),
    success: createAction('GET_TEACHER_SUCCESS'),
    failure: createAction('GET_TEACHER_FAILURE'),
};
