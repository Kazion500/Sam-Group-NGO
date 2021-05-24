

function Button({ sm, md, lg, bgYellow, title }) {
    const setSize = () => {
        if (sm) return 'w-32'
        if (md) return 'w-40'
        if (lg) return 'w-60'
    }
    const setBg = () => {
        if (bgYellow) return 'bg-yellow-400  hover:text-white'
        return 'bg-green-400 text-white'
    }

    return (
        <button className={`${setBg()} py-2.5 ${setSize()} text-xs rounded focus:outline-none font-bold hover:bg-yellow-500  transition`}>
            {title?.toUpperCase()}
        </button>
    )
}

export default Button
