import { ADD_ARTICLE } from '../constants/actionTypes.js';
const addArticle = (payload) => {
    return { type: ADD_ARTICLE, payload }
};
const getData = () => {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => {
                dispatch({ type: "DATA_LOADED", payload: json });
            });
    }
}
export {
    addArticle,
    getData
}