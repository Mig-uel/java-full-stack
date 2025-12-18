import type { SortOption } from "../types/sortOption";

export default function Dropdown({
  label,
  options,
  selectedOption,
  setSelectedOption,
}: {
  label: string;
  options: Record<string, string>[];
  selectedOption?: string;
  setSelectedOption: (option: SortOption) => void;
}) {
  return (
    <div className="flex items-center gap-2 justify-end pr-12 flex-1 font-primary">
      <label
        htmlFor="sortBy"
        className="text-lg font-semibold text-primary dark:text-light"
      >
        {label}
      </label>

      <select
        id="sortBy"
        className="px-2 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter capitalize"
        value={selectedOption}
        onChange={(e) =>
          setSelectedOption({
            label: e.target.options[e.target.selectedIndex].text,
            value: e.target.value,
          })
        }
      >
        {options.map((option) => (
          <option
            className="dark:bg-dark-bg dark:text-lighter"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
