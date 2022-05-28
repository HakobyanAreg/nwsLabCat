import {all, fork} from 'redux-saga/effects';
import GetCategories from './categories/getCategories'
import GetImages from './images/getImages'

export default function* watchers() {
    yield all([
        GetCategories,
        GetImages
    ].map(fork))
}
