import {GET_CATEGORIES, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS} from "../../../actions/categories/getCategories";

const initialState = {
    loading: false,
    data: [],
    error: false
}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case GET_CATEGORIES:
            return {...state, data: action.payload, loading: true, error: false}
        case GET_CATEGORIES_SUCCESS:
            return {...state, data: action.payload, loading: false, error: false}
        case GET_CATEGORIES_FAIL:
            return {...state, data: action.payload, loading: false, error: true}
        default:
            return state
    }
}
