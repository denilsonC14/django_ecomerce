import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css'
import RegisterForm from '../components/RegisterForm';
import { register } from '../utils/api';

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleRegister = async (username, email, password) => {
    try {
      await register(username, email, password);
      router.push('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Layout title="Register">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <RegisterForm onSubmit={handleRegister} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </Layout>
  );
}