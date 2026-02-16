export default function LabelInput({
  type = "text | email",
  labelName,
  inputName,
  namePlaceholder,
  formName,
  onChange,
}: {
  type: string;
  labelName: string;
  inputName: string;
  namePlaceholder: string;
  formName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-400">
        {labelName}
      </label>
      <input
        type={type}
        name={inputName.toLowerCase().replace(/\s+/g, "-")}
        value={formName}
        onChange={onChange}
        required
        className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        placeholder={namePlaceholder}
      />
    </div>
  );
}
