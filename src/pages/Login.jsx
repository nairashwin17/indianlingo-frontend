import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Card from '@/components/Card'

const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' })
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const newErrors = {}

        if (!formData.email) {
            newErrors.email = 'Email is required'
        }
        if (!formData.password) {
            newErrors.password = 'Password is required'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        try {
            const url = 'http://localhost:8080/auth/login';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (!response.ok) {
                setErrors({ server: data.error || 'Login failed' })
                return
            }
            console.log('Login successful:', data)
            // proceed with login/navigation after successful login
            login({ email: formData.email, name: data.username || 'User' })
            navigate('/dashboard')
        }
        catch (error) {
            console.error('Error during registration:', error)
            setErrors({ server: 'Network or server error' })
        }
    }

    return (
        <Card className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-blue-500 mb-2">Welcome Back</h1>
                <p className="text-gray-600 dark:text-gray-400">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="you@example.com"
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    placeholder="••••••••"
                />

                <Button type="submit" className="w-full" size="lg">
                    Sign In
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-500 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </Card>
    )
}

export default Login
