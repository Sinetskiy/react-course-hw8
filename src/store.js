import { createStore, compose, applyMiddleware } from 'redux';
import searchMiddleware  from './middlewares/searchMiddleware';
import showMiddleware  from './middlewares/showMiddleware';
import reducers from './reducers';

const createAppStore = () => {
    const store = createStore(
        reducers,
        compose(
            applyMiddleware(searchMiddleware),
            applyMiddleware(showMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    );

    return store;
};

export default createAppStore;