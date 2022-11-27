import { useThemeContext } from "../context/themeContext";

const BackgroundColor = ({ className }) => {
  const { themeHandler } = useThemeContext();

  return (
    <button
      onClick={() => themeHandler(className)}
      className={className}
    ></button>
  );
};

export default BackgroundColor;
