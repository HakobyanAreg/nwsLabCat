export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL'

export default function getCategoriesAction() {
    return {
        type: GET_CATEGORIES,
        payload: []
    }
}
