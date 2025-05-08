import React, { useContext } from "react";
import { themeContext } from "../../theme.js";

export default function Button() {
  const { theme, toggleItems } = useContext(themeContext);

  return (
    <div>
      <button className="btn-light" onClick={toggleItems}>
        <ion-icon
          className="moon-icon"
          name={theme === "light" ? "moon-outline" : "sunny-outline"}
        ></ion-icon>
      </button>
    </div>
  );
}
