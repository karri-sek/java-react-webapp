import {ADD_ARTICLE} from '../constants/actionTypes.js';
const initialState = {
    articles:[],
    remoteArticles: [],
    sagaArticles: []
}
const rootReducer = (state=initialState, action) => {
    console.log("action ", action)
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state,{
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }
      if (action.type === "SAGA_DATA_LOADED") {
        return Object.assign({}, state, {
            sagaArticles: state.sagaArticles.concat(action.payload)
        });
      }
    return state;
}
export{
    rootReducer
}
