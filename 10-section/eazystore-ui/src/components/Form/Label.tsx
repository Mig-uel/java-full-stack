export default function Label({
  htmlFor,
  className = "block text-lg font-semibold text-primary dark:text-light mb-2 capitalize",
  children,
}: {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
