import {all} from "redux-saga/effects";
import {slideSaga} from "./slides/saga";
import reviewSaga from "./reivews/saga";
import {gallerySaga} from "./gallery/saga";
import {teacherSaga} from "./teacher/saga";


function* rootSaga() {
    yield all([
        slideSaga(),
        reviewSaga(),
        gallerySaga(),
        teacherSaga()

    ]);
}

export default rootSaga;
