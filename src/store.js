import { makeObservable, observable, action } from "mobx";

class TodoStore {
  todos = ["n4fnjfnj"];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
    });
  }

  addTodo = (todo) => {
    this.todos.push(todo);
  };

  removeTodo = (index) => {
    this.todos.splice(index, 1);
  };
}

const todoStore = new TodoStore();

export { todoStore };
