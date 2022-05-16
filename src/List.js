import React from "react";
import { useState, useEffect } from "react";
import { rgbtohex } from "./utils";
const List = ({ color, index }) => {
  const [alert, setAlert] = useState(false);
  const { rgb, weight } = color;
  const [r, g, b] = rgb;
  const hex = rgbtohex(r, g, b);
  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);
  return (
    <div
      onClick={handleCopy}
      style={{ backgroundColor: hex }}
      className="color_box"
    >
      <div className={`box_content ${index > 10 ? "white" : "black"}`}>
        <p>{weight}%</p>
        <p>{hex}</p>
        {alert && <p className="alert">COPIED TO CLIPBOARD</p>}
      </div>
    </div>
  );
};
export default List;
