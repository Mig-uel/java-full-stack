import { Link, useRouteError } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import PageTitle from "./PageTitle";
import errorImage from "../assets/error.png";

export default function ErrorPage() {
  const error = useRouteError() as { status: string; data: string };

  return (
    <div className="flex flex-col min-h-245">
      <Header />
      {/* Main Content */}
      <main className="grow">
        <div className="py-12 bg-normal-bg dark:bg-dark-bg font-primary">
          <div className="max-w-4xl mx-auto px-4">
            <PageTitle title={error.status} />
          </div>
          <div className="text-center text-gray-600 dark:text-lighter flex flex-col items-center">
            <p className="max-w-xl px-2 mx-auto leading-6 mb-4">{error.data}</p>
            <img
              src={errorImage}
              alt="Error"
              className="w-full max-w-sm mx-auto mb-6"
            />
            <Link
              to="/"
              className="mt-6 py-3 px-6 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter font-semibold"
            >
              Back Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
