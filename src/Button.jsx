import { memo } from "react";

const Button = memo(({ onClick, label }) => {
  console.log("Button Component re-rendered");
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
});

export default Button;
