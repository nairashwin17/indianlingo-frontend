const Card = ({
    children,
    className = '',
    hover = false,
    ...props
}) => {
    return (
        <div
            className={`
        bg-white dark:bg-slate-800 rounded-xl shadow-md p-6
        border border-gray-200 dark:border-gray-700
        transition-all duration-300
        ${hover ? 'hover:shadow-xl hover:scale-[1.02] cursor-pointer' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    )
}

export default Card
