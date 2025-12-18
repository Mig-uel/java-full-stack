export default function Price({
  currency,
  price,
}: {
  currency: string;
  price: number;
}) {
  return (
    <>
      {currency}
      <span>{price}</span>
    </>
  );
}
