import KeyboardButton from "./KeyboardButton";


interface KeyboardProps {
    onKeyClick: (char: string) => void
}

const Keyboard = ({onKeyClick}: KeyboardProps) => {

    return (
    <div className="flex space-x-2 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md pt-500">
        <KeyboardButton label={"â"} onClick={() =>{
            onKeyClick("â")
        }}/>
        <KeyboardButton label={"ç"} onClick={() => onKeyClick("ç")}/>
        <KeyboardButton label={"ğ"} onClick={() => onKeyClick("ğ")} />
        <KeyboardButton label={"ı"} onClick={() => onKeyClick("ı")}/>
        <KeyboardButton label={"İ"} onClick={() => onKeyClick("İ")} />
        <KeyboardButton label={"î"} onClick={() => onKeyClick("î")}/>
        <KeyboardButton label={"ö"} onClick={() => onKeyClick("ö")}/>
        <KeyboardButton label={"ş"} onClick={() => onKeyClick("ş")}/>
        <KeyboardButton label={"ü"} onClick={() => onKeyClick("ü")} />
        <KeyboardButton label={"û"} onClick={() => onKeyClick("û")}/>
    </div>
)
}


export default Keyboard;