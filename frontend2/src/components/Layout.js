import Head from 'next/head';
import { useRouter } from 'next/router';
import { logout } from '../utils/api';

export default function Layout({ children, title = 'Task Manager' }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('token');
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-teal-500">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {router.pathname !== '/' && router.pathname !== '/register' && (
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{title}</h1>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
          {children}
        </div>
      </main>

      <footer className="text-center py-4 text-white">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}
