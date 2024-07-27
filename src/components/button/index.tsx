type GlobalButtonProps = {
    text?:string,
    style?:string,
    onClick?: () => void,
    textStyle?:string,
    icon?:JSX.Element
    disabled?:boolean
}
function GlobalButton({ text, style, onClick, icon, disabled }:GlobalButtonProps) {
    return (
        <button className={` ${style} text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} disabled={disabled}  onClick={onClick} type='button'>
            {text}
            {icon}
        </button>
    )
}

export default GlobalButton