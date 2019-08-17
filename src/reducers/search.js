import { handleActions } from 'redux-actions';
import {combineReducers} from "redux";
import {
    searchRequest,
    searchSuccess,
    searchFailure,
} from '../middlewares/actions';

export const elements = handleActions(
    {
        [searchRequest]: () => [],
        [searchSuccess]: (_state, action) => action.payload,
    },
    [],
);

const isLoading = handleActions(
    {
        [searchRequest]: () => true,
        [searchSuccess]: () => false,
        [searchFailure]: () => false,
    },
    false,
);


const error = handleActions(
    {
        [searchRequest]: () => null,
        [searchFailure]: (_state, action) => action.payload,
    },
    null,
);

export default combineReducers({
    elements,
    isLoading,
    error,
});