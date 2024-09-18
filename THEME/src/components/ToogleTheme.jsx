"use client";
import { useTheme } from "@/context/themeContext";

import Image from "next/image";
import brightSun from "../../public/bright-sun.svg";
import Moon from "../../public/moon.svg";
const ThemeToggle = ({ height, widht }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="">
      {theme === "light" ? (
        <Image src={Moon} width={widht} height={height} alt="moon" priority />
      ) : (
        <Image
          src={brightSun}
          width={widht}
          height={height}
          alt="sun"
          priority
        />
      )}{" "}
    </button>
  );
};

export default ThemeToggle;
