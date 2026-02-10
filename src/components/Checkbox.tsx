export default function Checkbox({
    privacyAccepted,
    onChange,
    message
}: {
    privacyAccepted: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    message: string;
}) {
    return (
        <div className="flex items-start space-x-3">
            <input
                type="checkbox"
                id="privacy-policy"
                checked={privacyAccepted}
                onChange={onChange}
                className="mt-1 w-4 h-4 text-blue-600 bg-zinc-800 border-zinc-600 rounded focus:ring-blue-500 focus:ring-2"
                required
            />
            <label
                htmlFor="privacy-policy"
                className="text-sm text-zinc-400 cursor-pointer"
            >
                {message}
            </label>
        </div>
    )
}