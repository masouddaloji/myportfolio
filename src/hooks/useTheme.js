import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (!theme) {
      localStorage.setItem("theme", "dark");
    }
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
