const API_URL = 'http://localhost:8000/api';  // Ajusta esto a la URL de tu backend

export async function login(username, password) {
  const response = await fetch(`${API_URL}/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) throw new Error('Login failed');
  return response.json();
}

export async function register(username, email, password) {
    const response = await fetch(`${API_URL}/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
  }
  

export async function getTasks() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/tasks/`, {
    headers: { 'Authorization': `Token ${token}` },
  });
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
}

export async function addTask(task) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/tasks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Failed to add task');
  return response.json();
}

export async function updateTask(taskId, updatedTask) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/tasks/${taskId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    },
    body: JSON.stringify(updatedTask),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
}

export async function deleteTask(taskId) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/tasks/${taskId}/`, {
    method: 'DELETE',
    headers: { 'Authorization': `Token ${token}` },
  });
  if (!response.ok) throw new Error('Failed to delete task');
}
export async function logout() {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/logout/`, {
      method: 'POST',
      headers: { 'Authorization': `Token ${token}` },
    });
    if (!response.ok) throw new Error('Logout failed');
  }
  

  