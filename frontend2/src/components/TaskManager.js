import { useState } from 'react';

export default function TaskManager({ tasks, onAddTask, onUpdateTask, onDeleteTask }) {
  const [newTask, setNewTask] = useState({ title: '', description: '', completed: false });
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      onAddTask(newTask);
      setNewTask({ title: '', description: '', completed: false });
    }
  };

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.completed === (filter === 'completed'));

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          placeholder="Task description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Task
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`mr-2 p-2 rounded ${filter === 'all' ? 'bg-gray-300' : 'bg-gray-100'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`mr-2 p-2 rounded ${filter === 'completed' ? 'bg-gray-300' : 'bg-gray-100'}`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('incomplete')}
          className={`p-2 rounded ${filter === 'incomplete' ? 'bg-gray-300' : 'bg-gray-100'}`}
        >
          Incomplete
        </button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="mb-2 p-2 border rounded">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onUpdateTask(task.id, { ...task, completed: !task.completed })}
              className="mr-2"
            />
            <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
            <p className="text-sm text-gray-600">{task.description}</p>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}