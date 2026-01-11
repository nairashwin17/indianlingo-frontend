import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { logout } = useAuth()

    const menuItems = [
        { path: '/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/profile', label: 'Profile', icon: '👤' },
        { path: '/chat', label: 'Chat', icon: '💬' },
    ]

    const isActive = (path) => location.pathname === path

    const handleLogout = async() => {
        try {
            await logout()
            navigate('/login', { replace: true })
        }
        catch (error) {
            console.error('Logout failed:', error)
        }
    }
    return (
        <aside className="w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-6">
            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`
              flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
              ${isActive(item.path)
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-slate-900 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }
            `}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-900 dark:text-slate-50 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-all duration-200 mt-8"
                >
                    <span className="text-xl">🚪</span>
                    <span className="font-medium">Logout</span>
                </button>
            </nav>
        </aside>
    )
}

export default Sidebar
