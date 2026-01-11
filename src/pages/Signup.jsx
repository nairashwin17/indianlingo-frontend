import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Card from '@/components/Card'

const Signup = () => {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmpassword: '',
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = {}

        if (!formData.fullname) {
            newErrors.fullname = 'Full Name is required'
        }
        if (!formData.email) {
            newErrors.email = 'Email is required'
        }
        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }
        if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = 'Passwords do not match'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        try {
            const url = 'http://localhost:8080/auth/register';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (!response.ok) {
                setErrors({ server: data.error || 'Registration failed' })
                return
            }
            console.log('Registration successful:', data)
            // proceed with login/navigation after successful registration
            login({ email: formData.email, name: formData.fullname })
            navigate('/login')
        }
        catch (error) {
            console.error('Error during registration:', error)
            setErrors({ server: 'Network or server error' })
        }

    }

    return (
        <Card className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-blue-500 mb-2">Create Account</h1>
                <p className="text-gray-600 dark:text-gray-400">Sign up to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Full Name"
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    error={errors.fullname}
                    placeholder="John Doe"
                />

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

                <Input
                    label="Confirm Password"
                    type="password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    error={errors.confirmpassword}
                    placeholder="••••••••"
                />

                <Button type="submit" className="w-full" size="lg">
                    Sign Up
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 font-medium hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </Card>
    )
}

export default Signup
