export default function Input({
  id,
  name,
  className,
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
