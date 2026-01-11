const Input = ({
    label,
    error,
    className = '',
    type = 'text',
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium mb-2 text-slate-900 dark:text-slate-50">
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`
          w-full px-4 py-2 rounded-lg border-2 
          bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50
          border-gray-300 dark:border-gray-600
          focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20
          transition-all duration-200
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}

export default Input
