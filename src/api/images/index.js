import {api} from "../axios";

export function getImagesApi (id, limit) {
    return api.get(`/images/search?limit=${limit}&page=1&category_ids=${id}`)
}
