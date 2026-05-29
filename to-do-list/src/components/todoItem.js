function TodoItem({
    todo,
    toggleTodo,
    deleteTodo
}) {

    return (
        <div className="todo-item">

            <span
                className={
                    todo.completed
                        ? "completed"
                        : ""
                }
            >
                {todo.text}
            </span>

            <div>

                <button
                    onClick={() =>
                        toggleTodo(todo.id)
                    }
                >
                    {
                        todo.completed
                            ? "Undo"
                            : "Complete"
                    }
                </button>

                <button
                    className="delete-btn"
                    onClick={() =>
                        deleteTodo(todo.id)
                    }
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TodoItem;