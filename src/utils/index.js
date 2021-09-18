/**
 * Calculate the text color based on the background color.
 * @param {string} bgColor
 * @returns either "black" or "white"
 */
export const replaceColor = (bgColor) => {
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
