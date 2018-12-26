import * as React from 'react';
import './App.css';
import  AddTodo  from './views/addTodo';
import  Todos  from './views/todoList';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <AddTodo />
        <Todos />
      </div>
    );
  }  
}

export default App;
