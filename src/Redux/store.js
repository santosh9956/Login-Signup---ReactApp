import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import FormReducer from './FormReducer'

const rootReducer = combineReducers({user:FormReducer  });

const configureStore = () => {
  return createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};
  
export default configureStore;




