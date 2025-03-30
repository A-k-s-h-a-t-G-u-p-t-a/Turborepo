interface TextInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function TextInput({placeholder, value,onChange}: TextInputProps) {
    return (
        <input
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} style={{
            padding: "10px",
            margin: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "200px",
            backgroundColor: "white",
            color: "black",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            transition: "background-color 0.3s, color 0.3s",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}>
        </input>
    );
}