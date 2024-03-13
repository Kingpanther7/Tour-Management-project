import React, { useState } from "react";

function ThemeSwitchWithIcons() {
  // Initialize state for theme (true for dark, false for light)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  // Apply theme to body element
  document.body.dataset.bsTheme = isDarkTheme ? "dark" : "light";

  return (
    <div>
      <button onClick={toggleTheme} className="btn">
        {isDarkTheme ? (
          <i class="ri-moon-clear-fill" fa-2xs></i>
        ) : (
          <i class="ri-sun-fill" fa-2xl></i>
        )}
        {""}
        {/* Display the appropriate icon */}
      </button>
    </div>
  );
}

export default ThemeSwitchWithIcons;
