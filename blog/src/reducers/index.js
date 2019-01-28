import { combineReducers } from 'redux';
import postReducers from './postReducers';
import authorReducer from './authorReducer';

export default combineReducers({

    post: postReducers,
    auth: authorReducer
}); 