import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const id = useParams<{ productId: string }>().productId;

  return <div>ProductDetail</div>;
}
