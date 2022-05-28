import {combineReducers} from "redux";
import GetCategories from './categories/getCategories'
import GetImages from './images/getImages'

export default combineReducers({
    GetCategories,
    GetImages
})
