import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      // const {id, text} = action.payload;
      // const todoToUpdate = state.todos.find((todo) => todo.id === id)
      // if(todoToUpdate) {
      //   todoToUpdate.text = text;
      // }
      // state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo.text)
    },
  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer

