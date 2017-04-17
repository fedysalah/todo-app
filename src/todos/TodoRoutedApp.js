import React from 'react'

import TodoApp from './TodoApp';
import {
  TodoHome,
  TodoNew,
  TodoDetail,
  NotFound,
} from './components';

import { browserHistory } from 'react-router';
import { Router, Route, IndexRoute} from 'react-router';


class TodoRoutedApp extends React.Component {
  render () {
    return (
     <Router history={browserHistory}>
         <Route path="/" component={TodoApp}>
           <IndexRoute component={TodoHome} />
           <Route path="new" component={TodoNew} />
           <Route path="detail/:todoId" component={TodoDetail} />
           <Route path="*" component={NotFound} />
         </Route>
     </Router>
   );
  }
}

export default TodoRoutedApp;
