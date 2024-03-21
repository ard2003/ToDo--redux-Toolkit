import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
     state.splice(action.payload);
    },
    editTask: (state, action) => {
      const { taskId, updatedTask } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === taskId);
      if (todoToEdit) {
        todoToEdit.task = updatedTask;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;