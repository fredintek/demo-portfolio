import { useThemeContext } from "../context/themeContext";

const PrimaryColor = ({ className }) => {
  const { themeHandler } = useThemeContext();

  return (
    <button
      onClick={() => themeHandler(className)}
      className={className}
    ></button>
  );
};

export default PrimaryColor;
