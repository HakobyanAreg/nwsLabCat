const {api} = require("../axios");

export function getCategoriesAi() {
    return api.get('categories')
}
