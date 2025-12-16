import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" },
    { href: "/cart", label: "Cart" },
  ];

  return (
    <header className="border-b border-gray-300 sticky top-0 z-20 bg-gray-100">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 py-4">
        <a
          href="/"
          className="text-center text-lg font-primary font-semibold text-primary py-2"
        >
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Eazy Stickers</span>
        </a>

        <nav className="flex items-center gap-2 py-2 z-10">
          {navLinks.map((link) => {
            if (link.label === "Cart") {
              return (
                <a
                  href={link.href}
                  className="text-primary py-2"
                  key={link.label}
                >
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </a>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="text-center text-lg font-primary font-semibold text-primary py-2"
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
