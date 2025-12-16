import { useNavigate } from "react-router-dom";
import emptyCartImage from "../assets/empty-cart.png";
import PageTitle from "./PageTitle";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="min-h-213 py-12 bg-normal-bg dark:bg-dark-bg font-primary">
      <div className="max-w-4xl mx-auto px-4">
        <PageTitle title="Your Cart" />
        <div className="text-center text-gray-600 dark:text-lighter flex flex-col items-center">
          <p className="max-w-xl px-2 mx-auto text-base mb-4">
            Oops... Your cart is empty. Continue shopping
          </p>
          <img
            src={emptyCartImage}
            alt="Empty Cart"
            className="max-w-75 mx-auto mb-6 dark:bg-light dark:rounded-md"
          />
          <button
            onClick={() => navigate("/", { replace: true })}
            className="py-2 px-4 bg-primary dark:bg-light text-white dark:text-black text-xl font-semibold rounded-sm flex justify-center items-center hover:bg-dark dark:hover:bg-lighter transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}
