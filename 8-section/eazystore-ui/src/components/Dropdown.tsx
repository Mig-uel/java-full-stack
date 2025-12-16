export default function Dropdown({
  label,
  options,
  selectedOption,
  setSelectedOption,
}: {
  label: string;
  options: string[];
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 justify-end pr-12 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary">{label}</label>

      <select
        className="px-4 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none text-gray-800 capitalize"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
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
