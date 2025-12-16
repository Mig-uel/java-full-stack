import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "light"; // Default to 'light' if no theme is stored
  });

  useEffect(() => {
    const isDark = theme === "dark"; // Determine if the theme is dark

    document.documentElement.classList.toggle("dark", isDark); // Toggle the 'dark' class on the root element
    localStorage.setItem("theme", theme); // Store the current theme in localStorage
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return [theme, toggleTheme] as const; // 'as const' to indicate the tuple type
}
