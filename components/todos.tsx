import React, { useState } from 'react';

function createTodos() {
  // Some logic to generate initial todo items
  return [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
    // ... more todo items
  ];
}

function TodoList() {
  // Initialize the todos state with the result of createTodos() immediately
  const [todos, setTodos] = useState(createTodos());

  // Rest of your component logic...
}

export default TodoList;
// This code will achieve the same result as the previous example. It's a matter of preference and readability. Using the function as in the previous example ensures that the initialization logic is only executed once when the component is initially rendered. If you use useState(createTodos()), the createTodos() function is called immediately when the component is initialized. Both approaches are valid depending on your specific use case.





