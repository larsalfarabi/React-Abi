export default function LinkButton({title, isActive, ...props}){
    return (
        <button className={`${isActive ? 'bg-red-500 text-white' : ''}`} {...props}>{title}</button>
    )
}