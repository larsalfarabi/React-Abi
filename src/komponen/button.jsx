export default function Button({title, ...props}){
    return (
        <button {...props} className="bg-green-500 text-white px-3 py-1 rounded-lg">{title}</button>
    )
}