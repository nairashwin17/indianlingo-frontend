import { useAuth } from '@/context/AuthContext'
import Card from '@/components/Card'

const Dashboard = () => {
    const { user } = useAuth()

    const stats = [
        { label: 'Total Users', value: '1,234', icon: '👥', color: 'bg-blue-500' },
        { label: 'Revenue', value: '$12,345', icon: '💰', color: 'bg-green-500' },
        { label: 'Projects', value: '42', icon: '📁', color: 'bg-purple-500' },
        { label: 'Tasks', value: '156', icon: '✅', color: 'bg-orange-500' },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-50">
                    Welcome back, {user?.name || 'User'}! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Here's what's happening with your projects today.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} hover className="relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-20 h-20 ${stat.color} opacity-10 rounded-bl-full`} />
                        <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-3xl">{stat.icon}</span>
                                <span className={`${stat.color} text-white px-2 py-1 rounded text-xs font-bold`}>
                                    Live
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">{stat.value}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-50">Recent Activity</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                    {item}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-slate-900 dark:text-slate-50">Activity Item {item}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-50">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {['Create Project', 'Add User', 'View Reports', 'Settings'].map((action, index) => (
                            <button
                                key={index}
                                className="p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 font-medium text-slate-900 dark:text-slate-50"
                            >
                                {action}
                            </button>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard
