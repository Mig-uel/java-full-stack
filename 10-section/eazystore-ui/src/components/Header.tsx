import {
  faMoon,
  faShoppingBasket,
  faSun,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
  { href: "/cart", label: "Cart" },
];

export default function Header() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-normal-bg dark:bg-dark-bg">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 py-4">
        <Link
          to="/"
          className="text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter"
        >
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold"> Eazy Stickers</span>
        </Link>

        <nav className="flex items-center gap-4 py-2 z-10">
          <button
            className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <span className="sr-only">Toggle Dark Mode</span>
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              className="w-4 h-4 dark:text-light text-primary"
            />
          </button>

          <>
            {navLinks.map((link) => {
              if (link.label === "Cart") {
                return (
                  <Link
                    to={link.href}
                    className="text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter"
                    key={link.label}
                  >
                    <FontAwesomeIcon icon={faShoppingBasket} />
                  </Link>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter"
                >
                  {link.label}
                </Link>
              );
            })}
          </>
        </nav>
      </div>
    </header>
  );
}
