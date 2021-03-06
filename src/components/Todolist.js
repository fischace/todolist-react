import React from 'react'

const Todolist = ({todos, setTodos, setEditTodo}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo)=>todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
  return (
    <div>
        {todos.map((todo)=>(
            <li className="todo-list" key={todo.id}>
                <input type="text" value={todo.title} className={`list ${todo.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} />
                    <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                        complete
                    </button>
                    <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                        edit
                    </button>
                    <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                        delete
                    </button>
            </li>
        ))}
    </div>
  );
};

export default Todolist