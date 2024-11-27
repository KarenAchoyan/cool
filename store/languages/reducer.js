
import { handleActions } from 'redux-actions';
import {
    getLanguages,
} from './actions';

const initialState = {
    languages: [],
    isFetching: false,
    error: null,
};

const languageReducer = handleActions(
    {
        [getLanguages.request]: (state, { payload }) => ({
            ...state,
            isFetching:true,
        }),
        [getLanguages.success]: (state, { payload }) => ({
            ...state,
            languages: payload,
            isFetching: false,
        }),
        [getLanguages.failure]: (state, { payload }) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
    },
    initialState
);

export default languageReducer;
