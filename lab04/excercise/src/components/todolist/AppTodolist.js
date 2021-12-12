import { useEffect, useRef, useState } from "react";
import { useStore, actions } from "./Dependencies";
import styles from './AppTodolist.module.css'
import "./AppTodo.css"
function AppTodolist() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState();

  const inputRef = useRef();
  const addButtonRef = useRef();
  const liRef = useRef();

  const handleAddTodo = () => {
    if (todoInput) {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodo(""));

      inputRef.current.focus();
    }
  };

  const handleEditTodo = (index) => {
    dispatch(actions.setTodo(todos[index]));
    setEditing(true);
    setEditingIndex(index);

    inputRef.current.focus();
  };

  const handleUpdateTodo = () => {
    if (todoInput) {
      setEditing(false);
      dispatch(actions.updateTodo({ value: todoInput, index: editingIndex }));
      dispatch(actions.setTodo(""));

      inputRef.current.focus();
    }
  };

  const handleCancelTodo = () => {
    setEditing(false);
    dispatch(actions.setTodo(""));
    inputRef.current.focus();
  };

  useEffect(() => {
    liRef.current.classList.add('itemAddTodo')
  }, [todoInput])


  useEffect(() => {
    const handleUpdate = (e) => {
      if (e.keyCode === 13) {
        if (inputRef.current.value) {
          addButtonRef.current.click();
        }
      }
    };

    window.addEventListener("keyup", handleUpdate);

    return () => {
      window.removeEventListener("keyup", handleUpdate);

    };
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Todo list</h1>
        </div>
        <ul className={styles.listTodo}>
            {todos.map((todo, index) => {
            return (
                <li ref={liRef} key={index} className="itemTodo">
                <div className={styles.nameTodo} onDoubleClick={() => handleEditTodo(index)}>{todo}</div>
                <div>
                    <button
                        className={styles.button}
                        onClick={() => dispatch(actions.deleteTodo(index))}
                    >
                        Delete
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => handleEditTodo(index)}
                    >
                        Edit
                    </button>
                </div>
                </li>
            );
            })}
        </ul>
        <div className={styles.formInput}>
            <input className={styles.input}
                ref={inputRef}
                value={todoInput}
                placeholder="Add a new todo..."
                onChange={(e) => dispatch(actions.setTodo(e.target.value))}
            />
            <button className={styles.button}
                ref={addButtonRef}
                onClick={(editing && handleUpdateTodo) || handleAddTodo}
            >
                {(editing && "Update") || "Add"}
            </button>
            {editing && (
                <button className={styles.button} onClick={handleCancelTodo}>
                Cancel
                </button>
            )}
        </div>
    </div>
  );
}

export default AppTodolist;
