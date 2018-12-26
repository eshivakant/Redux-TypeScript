import { Todo, State } from '../store';
import * as React from 'react';
import { toggleTodo } from '../actions/actions';
import { connect } from 'react-redux';

interface Props {
    todos: Todo[],
    onTodoClicked: (todoId: number) => void
  }

  interface IState { }
  
  export class AddTodoForm extends React.Component<Props, IState> {
    constructor(props: Props) {
      super(props)
    }
  
    render() {
      const { todos, onTodoClicked } = this.props
      return (
        <ul>
          {
            todos.map(todo => (
              <li key={todo.id}
                onClick={() => onTodoClicked(todo.id)}
                style={{ textDecoration: `${todo.complete ? 'line-through' : ''}`, cursor: 'pointer' }}>
                {todo.name}
              </li>)
            )
          }
        </ul>
      )
    }
  }

  const mapStateToProps = (state:State, props:Props)=>({
    todos:state.todos
  })

  const mapDispatchToProps = {
    onTodoClicked:toggleTodo
  }

  
export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(AddTodoForm)