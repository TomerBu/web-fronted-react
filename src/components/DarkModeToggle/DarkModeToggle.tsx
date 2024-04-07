import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";
import styles from "./DarkModeToggle.module.scss";

const DarkModeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button className={`${styles.toggle} ${styles[theme]}`} onClick={toggle}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeToggle;
