import { useRef, useState } from "react";

function TodoForm({ addTodo }) {

    const [input, setInput] =
        useState("");

    const inputRef = useRef(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (input.trim() === "") {
            return;
        }

        addTodo(input);

        setInput("");

        inputRef.current.focus();
    };

    return (
        <form
            className="todo-form"
            onSubmit={handleSubmit}
        >

            <input
                ref={inputRef}
                type="text"
                placeholder="Enter todo"
                value={input}
                onChange={(e) =>
                    setInput(e.target.value)
                }
            />

            <button type="submit">
                Add
            </button>

        </form>
    );
}

export default TodoForm;