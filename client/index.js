import { createElement } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory as history } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes.jsx';
import reducer from './redux.js';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //flag for Redux devtools extension
);

//first step: create a very basic reducer
// const initialState = {
// 	user: {},
// 	products: [],
// 	accessToken: null,
// 	cart: [],
// 	favs: [],
// 	filter: ''
// };

//Hello world reducer for learning
// function reducer(state = initialState, action) {
// 	console.log('called');
// 	if (action.type == 'UPDATE_FILTER') {
// 		return Object.assign({}, state, { filter: action.reload });
// 	}
// 	return state;
// }
// window.store = store;
// store.getState()
//store.dispatch({type: 'INC'})
//store.getState()

render(
	createElement(
		Provider,
		{ store },
		createElement(Router, { routes, history }),
	),
  window.document.getElementById('app')
);
