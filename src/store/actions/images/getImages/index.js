export const GET_IMAGES = 'GET_IMAGES'
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS'
export const GET_IMAGES_FAIL = 'GET_IMAGES_FAIL'

export default function getImagesAction(id, name, limit) {
    return {
        type: GET_IMAGES,
        payload: {id: id, name: name, limit: limit}
    }
}
