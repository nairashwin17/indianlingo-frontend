import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
            <div className="flex items-center justify-between max-w-8xl mx-auto">
                 <Link to="/dashboard" className="flex items-center">
                    <img
                        src={theme === 'light' ? '/assets/indianlingoblack.svg' : '/assets/indianlingowhite.svg'}
                        alt="IndianLingo Logo"
                        className="h-8"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
