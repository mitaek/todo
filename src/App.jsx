import { AuthProvider, useAuth } from './contexts/AuthContext'
import AuthForm from './components/auth/AuthForm'
import HomePage from './pages/HomePage'

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-svh items-center justify-center text-gray-500">
        불러오는 중...
      </div>
    )
  }

  return user ? <HomePage /> : <AuthForm />
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
