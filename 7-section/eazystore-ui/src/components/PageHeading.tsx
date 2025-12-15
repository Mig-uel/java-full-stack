export default function PageHeading({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
