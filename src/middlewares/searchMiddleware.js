// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import {search} from '../api';
import {
    searchRequest,
    searchSuccess,
    searchFailure,
} from './actions';

export default store => next => action => {
    if (action.type === searchRequest.toString()) {

        search(action.payload).then((data) => {
            store.dispatch(searchSuccess(data))
        }).catch((ex) => {
            store.dispatch(searchFailure(ex));
        });

    }
    return next(action);
};


