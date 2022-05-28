import {call, put, takeLatest} from "redux-saga/effects";
import {GET_CATEGORIES, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS} from "../../../actions/categories/getCategories";
import {getCategoriesAi} from "../../../../api/categories";

export default function* watcher() {
    yield takeLatest(GET_CATEGORIES, getCategories)
}

function* getCategories() {
    try{
        const {data} = yield call(getCategoriesAi)
        yield put({
            type: GET_CATEGORIES_SUCCESS,
            payload: data
        })
    } catch (e) {
        console.warn(e)
        put({
            type: GET_CATEGORIES_FAIL,
            payload: {
                errors: {
                    current: e.message
                }
            }
        })
    }
}
