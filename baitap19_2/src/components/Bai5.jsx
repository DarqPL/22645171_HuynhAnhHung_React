import React, { useState } from 'react';
import './Bai5.css';

const Bai5 = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    
    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask('');
        }
    };

    
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    
    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="bai5">
            <h1>Bài 5</h1>
            <h2>To do list</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        <span onClick={() => toggleTaskCompletion(index)}>
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bai5;
