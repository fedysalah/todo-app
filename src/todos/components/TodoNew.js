import React from 'react';
import {
  TodoForm
} from './TodoForm';

/*
  Si on utilise directement TodoForm depuis TodoRoutedApp,
  on a un warning sur le 'handleNewTodo: PropTypes.func.isRequired' du TodoForm
  car le Router instancie le composant mais les props lui sont passées via TodoApp.
  En wrappant TodoForm dans TodoNew, le router instancie TodoNew, là où les props ne sont pas validées.
  Le '{...this.props}' permet de transmettre au sous composant l'ensemble des props du composant.
*/
export class TodoNew extends React.Component {
  render () {
    return (
      <TodoForm {...this.props}/>
    );
  }
}
