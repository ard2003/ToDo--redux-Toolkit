import React, { useState } from 'react';
import './Home.css';
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/TodoSlice';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks)
  console.log(tasks)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) {
      alert('Enter a task before adding !!');
      setInputValue('');
      return;
    }
    dispatch(addTask({ task: inputValue }));
    setInputValue('');
  };

  return (
    <>
      <section>
        <div className='todo-body'>
          <h1>
            To-do
            <p>“Forget about your lists and do what you can because that's all you can do. ...</p>
          </h1>

          <div className='todo-input'>
            <input
              type='text'
              name='input'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='add-button' onClick={handleSubmit}>
              add
            </button>
          </div>

          <TodoList tasks={tasks} />
        </div>
      </section>
    </>
  );
};

export default Home;