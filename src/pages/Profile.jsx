import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'

const Profile = () => {
    const { user } = useAuth()
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        bio: '',
        location: '',
    })
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock save
        setIsEditing(false)
        alert('Profile updated successfully!')
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div>
                <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-50">Profile Settings</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Manage your account settings and preferences
                </p>
            </div>

            <Card>
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-slate-500 flex items-center justify-center text-white text-4xl font-bold">
                        {user?.name?.charAt(0) || 'U'}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{user?.name || 'User'}</h2>
                        <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                        <Button
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? 'Cancel' : 'Edit Profile'}
                        </Button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Full Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />

                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>

                    <Input
                        label="Location"
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Country"
                        disabled={!isEditing}
                    />

                    <div>
                        <label className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-50">Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            disabled={!isEditing}
                            rows={4}
                            className={`
                w-full px-4 py-2 rounded-lg border-2 
                bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50
                border-gray-300 dark:border-gray-600
                focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20
                transition-all duration-200
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                ${!isEditing ? 'opacity-60 cursor-not-allowed' : ''}
              `}
                            placeholder="Tell us about yourself..."
                        />
                    </div>

                    {isEditing && (
                        <div className="flex gap-4">
                            <Button type="submit" className="flex-1">
                                Save Changes
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1"
                                onClick={() => setIsEditing(false)}
                            >
                                Cancel
                            </Button>
                        </div>
                    )}
                </form>
            </Card>

            <Card>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-50">Account Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Member Since</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-slate-50">Jan 2024</p>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-slate-50">42</p>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Contributions</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-slate-50">1,234</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Profile
