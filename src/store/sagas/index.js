import {all, fork} from 'redux-saga/effects';
import GetCategories from './categories/getCategories'
// import Images from './images/getImages'

export default function* watchers() {
    yield all([
        GetCategories
    ].map(fork))
}
