import React, { useState } from "react";
import "../ColorPicker/styles.css";

function ColorPicker() {
  const [color, setColor] = useState("#0000FF");

  function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777216).toString(16);
    const paddedColor = randomColor.padStart(6, "0");
    setColor(`#${paddedColor}`);
  }

  function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  return (
    <div className="container">
      <div className="colorPalette">
        <div>
          <div className="btns">
            <button id="colorButton" onClick={getRandomColor}>
              Generate Random Color
            </button>
            <button id="colorButton" onClick={getRandomRgbColor}>
              Generate RGB color!!!
            </button>
          </div>
          <div className="clrpalette">
            <div
              style={{
                backgroundColor: color,
                width: "100%",
                height: "50vh",
                marginTop: "10px",
              }}
              className="text"
            >{`${color}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
