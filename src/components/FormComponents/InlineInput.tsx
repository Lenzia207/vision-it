export default function InlineInput({
    name,
    value,
    placeholder,
    onChange,
}: {
    name: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder ?? ""}
            className="w-full px-3 py-2 text-sm input-dark transition-all"
        />
    );
}