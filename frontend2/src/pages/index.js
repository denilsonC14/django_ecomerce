import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import LoginForm from '../components/LoginForm';
import Link from 'next/link';
import { login } from '../utils/api';

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.token);
      router.push('/tasks');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Layout title="Login">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <LoginForm onSubmit={handleLogin} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <p className="mt-4 text-center">
          Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </div>
    </Layout>
  );
}