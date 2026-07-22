import { useAuth } from '../contexts/AuthContext'

export default function HomePage() {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-svh bg-gray-50 px-4 py-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">할 일</h1>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span>{user?.email}</span>
          <button
            type="button"
            onClick={() => signOut()}
            className="rounded-lg border border-gray-300 px-3 py-1 hover:bg-gray-100"
          >
            로그아웃
          </button>
        </div>
      </header>

      <p className="text-gray-500">할 일 목록은 다음 단계에서 구현합니다.</p>
    </div>
  )
}
