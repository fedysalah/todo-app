import React from 'react'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import thunk from 'redux-thunk';
import { reducer } from './reducers';
import * as Actions from './actions';


import TodoApp from './TodoApp';
import TodoHome from './components/TodoHome';
import TodoDetail from './components/TodoDetail';
import TodoForm from './components/TodoForm';
import {NotFound} from './components/NotFound';


import {
  NEW,
  IN_PROGRESS,
  DONE,
} from './components/Statuses'




const store = createStore(reducer, applyMiddleware(thunk));

const initTodos = [
  {id: 1, title: 'Titre 1', description: 'description 1', status: NEW},
  {id: 2, title: 'Titre 2', description: 'description 2', status: DONE},
  {id: 3, title: 'Titre 3', description: 'description 3', status: IN_PROGRESS},
]

const initFilters = {
  [NEW]: true,
  [IN_PROGRESS]: true,
  [DONE]: true
}

class TodoRoutedApp extends React.Component {

  componentDidMount() {
    store.dispatch(Actions.loadTodos(initTodos));
    store.dispatch(Actions.loadFilters(initFilters))
  }

  render () {
    const history = syncHistoryWithStore(browserHistory, store);
    return (
      <Provider store={store}>
        <Router history={history}>
         <Route path="/" component={TodoApp}>
           <IndexRoute component={TodoHome} />
            <Route path="new" component={TodoForm} />
            <Route path="detail/:todoId" component={TodoDetail} />
            <Route path="*" component={NotFound} />
         </Route>
         </Router>
     </Provider>
   );

  }
}

export default TodoRoutedApp;
