import {call, put, takeLatest} from "redux-saga/effects";
import {GET_IMAGES, GET_IMAGES_FAIL, GET_IMAGES_SUCCESS} from "../../../actions/images/getImages";
import {getImagesApi} from "../../../../api/images";

export default function* watcher() {
    yield takeLatest(GET_IMAGES, getCategories)
}

function* getCategories(action) {
    try{
        const {data} = yield call(getImagesApi, action.payload.id, action.payload.limit)
        yield put({
            type: GET_IMAGES_SUCCESS,
            payload: {data: data, name: action.payload.name, id: action.payload.id}
        })
    } catch (e) {
        console.warn(e)
        put({
            type: GET_IMAGES_FAIL,
            payload: {
                errors: {
                    current: e.message
                },
                name: action.payload.name
            }
        })
    }
}
