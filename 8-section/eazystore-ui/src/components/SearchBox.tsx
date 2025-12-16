export default function SearchBox({
  label,
  placeholder,
  value,
}: {
  label: string;
  placeholder: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary">{label}</label>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="px-3 py-2 text-base rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none flex-1"
      />
    </div>
  );
}
