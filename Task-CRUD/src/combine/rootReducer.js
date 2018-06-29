import { combineReducers } from 'redux';
import source from '../reducers/reducer';
import del from '../reducers/reducer';
import Newdata from '../reducers/reducer';

export default combineReducers({
 source,
 del,
 Newdata

});
