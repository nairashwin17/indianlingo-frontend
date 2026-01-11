import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-8">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MainLayout
