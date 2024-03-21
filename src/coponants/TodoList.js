import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "../redux/TodoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const [edit, setEdit] = useState("");
  const todos = useSelector((state) => {
    return state.tasks;
  });

  if (!Array.isArray(todos)) {
    return <div>No todos found</div>;
  }
  const handleDelete = (tasksId) => {
    dispatch(deleteTask(tasksId));
  };
  const cancelEdit = () => {
    setShow(null);
    setEdit("");
  };
  const saveEdit = () => {
    dispatch(editTask({ taskId: show, updatedTask: edit }));
    setShow(null);
    setEdit("");
  };

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            width: "auto",
            backgroundColor: "#EE82EE",
            display: "flex",
            height: "3rem",
            borderRadius: "8px",
            marginTop: "1rem",
          }}
        >
          <h4
            style={{
              color: "black",
              marginTop: "11px",
              marginLeft: "3px",
              overflow: "scrol",
            }}
          >
            {todo.task}
            <span
              style={{
                color: "blue",
                fontSize: "8px",
                marginLeft: "23rem",
                marginRight: "3px",
              }}
              onClick={() => setShow(todo.id)}
            >
              edit task
            </span>
          </h4>

          <button
            style={{
              backgroundColor: "#4B0082",
              width: "5rem",
              height: "2rem",
              border: "0px",
              borderRadius: "8px",
              marginLeft: "24rem-auto",
              marginTop: "9px",
              color: "white",
            }}
            onClick={handleDelete}
          >
            delete
          </button>

          {show === todo.id ? (
            <div>
              <input
                type="text"
                style={{
                  backgroundColor: "transparent",
                  border: "3px",
                  borderRadius: "5px",
                  height: "1.5rem",
                  marginLeft: "1px",
                }}
                onChange={(e) => setEdit(e.target.value)}
              />
              <button
                style={{
                  height: "1.5rem",
                  backgroundColor: "green",
                  border: "0",
                  borderRadius: "5px",
                  margin: "1rem",
                }}onClick={saveEdit}
              >
                save
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
