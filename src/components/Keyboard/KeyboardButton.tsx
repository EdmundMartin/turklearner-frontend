


const KeyboardButton = ({label, onClick}) => {
    return (
        <button onClick={onClick}
                className="px-3 py-1 bg-gray-200 text-gray-800 font-mono font-medium border border-gray-300 rounded shadow-sm hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
    {label}
    </button>
    )
}

export default KeyboardButton;