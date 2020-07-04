import { ADD_ARTICLE } from '../constants/actionTypes.js';
const addArticle = (payload) => {
    return { type: ADD_ARTICLE, payload }
};
export {
    addArticle
}