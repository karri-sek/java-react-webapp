import { ADD_ARTICLE } from '../constants/actionTypes';
const forbiddenWords = ['spam', 'money'];
export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter(w => action.payload.title.includes(w));
                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" });
                }
            }
            return next(action);
        };
    };
}