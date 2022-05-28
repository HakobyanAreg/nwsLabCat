import {GET_IMAGES, GET_IMAGES_FAIL, GET_IMAGES_SUCCESS} from "../../../actions/images/getImages";

const initialState = {
    loading: false,
    data: [],
    name: null,
    error: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                data: action.payload,
                name: action.payload.name,
                id: action.payload.id,
                loading: true,
                error: false
            }
        case GET_IMAGES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                name: action.payload.name,
                id: action.payload.id,
                loading: false,
                error: false
            }
        case GET_IMAGES_FAIL:
            return {
                ...state,
                data: action.payload,
                name: action.payload.name,
                id: action.payload.id,
                loading: false,
                error: true
            }
        default:
            return state
    }
}
