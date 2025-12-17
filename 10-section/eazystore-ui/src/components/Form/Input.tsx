export default function Input({
  id,
  name,
  className = "w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300",
  placeholder,
  type = "text",
  required = false,
  minLength,
  maxLength,
  pattern,
  title,
}: {
  id: string;
  name: string;
  className?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  title?: string;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
      title={title}
    />
  );
}
