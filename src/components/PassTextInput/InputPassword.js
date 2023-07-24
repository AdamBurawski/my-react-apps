import React, { useState } from "react";

export const InputPassword = (props) => {
  const [isPassword, setIsPassword] = useState(false);

  const showPreview = () => {
    setIsPassword(true);
  };
  const hidePreview = () => {
    setIsPassword(false);
  };

  return (
    <>
      <input type={isPassword ? "text" : "password"} />
      <button onMouseDown={showPreview} onMouseUp={hidePreview}>
        {/* {showPassword === "password" ? showPassword : showPreview} */}
        Naciśń
      </button>
    </>
  );
};
