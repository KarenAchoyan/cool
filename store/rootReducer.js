import { combineReducers } from "redux";
import slideReducer from "./slides/reducer";
import reviewReducer from "./reivews/reducer";
import galleryReducer from "./gallery/reducer";
import teacherReducer from "./teacher/reducer";

const rootReducer = combineReducers({
    slide:slideReducer,
    review:reviewReducer,
    gallery:galleryReducer,
    teacher:teacherReducer
});

export default rootReducer;