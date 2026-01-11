import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import Chat from '@/pages/Chat'

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                {/* Auth Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>

                {/* Protected Routes */}
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/chat" element={<Chat />} />
                </Route>

                {/* Default Route */}
                <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
        </AuthProvider>
    )
}

export default AppRoutes
