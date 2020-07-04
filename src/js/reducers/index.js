import {ADD_ARTICLE} from '../constants/actionTypes.js';
const initialState = {
    articles:[]
}
const rootReducer = (state=initialState, action) => {
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state,{
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}
export{
    rootReducer
}
