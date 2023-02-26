import React from "react";

const fetchTodos = async () => {
	const res = await await fetch("https://jsonplaceholder.typecode.com/todos");
	const todos = await res.json();
};

async function TodosList() {
	const todos = await fetchTodos();

	return <div>TodosList</div>;
}

export default TodosList;
