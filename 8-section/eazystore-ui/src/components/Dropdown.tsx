export default function Dropdown({
  label,
  options,
  selectedOption,
}: {
  label: string;
  options: string[];
  selectedOption?: string;
}) {
  return (
    <div className="flex items-center gap-2 justify-end pr-12 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary">{label}</label>

      <select
        className="px-3 py-2 text-base rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none flex-1"
        value={selectedOption}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
