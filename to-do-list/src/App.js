import { useEffect, useState } from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import EmptyState from "./components/emptyState";

function App() {

    const [todos, setTodos] = useState(() => {

        const savedTodos =
            localStorage.getItem("todos");

        return savedTodos
            ? JSON.parse(savedTodos)
            : [];
    });

    useEffect(() => {

        localStorage.setItem(
            "todos",
            JSON.stringify(todos)
        );

    }, [todos]);

    const addTodo = (text) => {

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {

        const updatedTodos =
            todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        completed:
                            !todo.completed
                    }
                    : todo
            );

        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {

        const confirmDelete =
            window.confirm(
                "Delete this todo?"
            );

        if (!confirmDelete) {
            return;
        }

        const filteredTodos =
            todos.filter(
                (todo) => todo.id !== id
            );

        setTodos(filteredTodos);
    };

    return (
        <div className="container">

            <h1>Todo App</h1>

            <TodoForm addTodo={addTodo} />

            <div className="counter">
                Total Todos: {todos.length}
            </div>

            {
                todos.length === 0
                    ? <EmptyState />
                    : (
                        <TodoList
                            todos={todos}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
            }

        </div>
    );
}

export default App;