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
      <label
        htmlFor="search"
        className="text-lg font-semibold text-primary dark:text-light"
      >
        {label}
      </label>

      <input
        id="search"
        type="text"
        placeholder={placeholder}
        value={value}
        className="px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-light"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
