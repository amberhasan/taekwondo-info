import {createStore} from 'redux';
import {incrementReducer} from './incrementReducer';

const store = createStore(incrementReducer);

export default store;
