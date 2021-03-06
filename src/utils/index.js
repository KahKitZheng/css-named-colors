/**
 * Determine whether text color should be black or white depending on the bgColor.
 * @param {string} bgColor
 * @returns either "black" or "white"
 */
export const calcTextColor = (bgColor) => {
  let rgb = bgColor.split(",");

  let red = rgb[0];
  let green = rgb[1];
  let blue = rgb[2];

  /**
   * Two colors provide good color visibility if the brightness difference and
   * the color difference between the two colors are greater than a set range.
   *
   * Color brightness is determined by the following formula:
   * ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
   *
   * Note: This algorithm is taken from a formula for converting RGB values to YIQ values.
   * This brightness value gives a perceived brightness for a color.
   *
   * src: https://www.w3.org/TR/AERT/#color-contrast
   */
  let sum = Math.round(
    (parseInt(red) * 299 + parseInt(green) * 587 + parseInt(blue) * 114) / 1000
  );

  return sum > 128 ? "black" : "white";
};

/**
 * Create a masonry layout when the viewport is at least 2560px;
 * @param {number} vw, width of the viewport
 */
export const createMasonry = (col) => {
  const containerEl = document.getElementById("colors");
  const red = document.getElementById("red");
  const pink = document.getElementById("pink");
  const orange = document.getElementById("orange");
  const yellow = document.getElementById("yellow");
  const purple = document.getElementById("purple");
  const green = document.getElementById("green");
  const blue = document.getElementById("blue");
  const brown = document.getElementById("brown");
  const white = document.getElementById("white");
  const gray = document.getElementById("gray");
  let colorGroups = [];

  if (col === 2) {
    colorGroups = [
      [red, orange, purple, blue, white],
      [pink, yellow, green, brown, gray],
    ];
  }

  if (col === 3) {
    colorGroups = [
      [red, yellow, blue, gray],
      [pink, purple, brown],
      [orange, green, white],
    ];
  }

  containerEl.innerHTML = "";

  colorGroups.forEach((colorGroup) => {
    const column = document.createElement("div");
    column.style.display = "flex";
    column.style.flexDirection = "column";

    for (let index = 0; index < colorGroup.length; index++) {
      column.appendChild(colorGroup[index]);
    }

    containerEl.appendChild(column);
  });
};
