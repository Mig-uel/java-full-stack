export default function SearchBox({
  label,
  placeholder,
  value,
  setValue,
}: {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary">{label}</label>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="px-4 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none text-gray-800"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
