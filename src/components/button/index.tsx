type GlobalButtonProps = {
    text?:string,
    style?:string,
    onClick?: () => void,
    textStyle?:string,
    icon?:JSX.Element
}
function GlobalButton({ text, style, onClick, icon }:GlobalButtonProps) {
    return (
        <button className={`  ${style} text-white font-bold py-2 px-4 rounded`}  onClick={onClick} type='button'>
            {text}
            {icon}
        </button>
    )
}

export default GlobalButton