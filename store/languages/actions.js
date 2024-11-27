import { createAction } from 'redux-actions';

export const getLanguages = {
    request: createAction('GET_LANGUAGES_REQUEST'),
    success: createAction('GET_LANGUAGES_SUCCESS'),
    failure: createAction('GET_LANGUAGES_FAILURE'),
};