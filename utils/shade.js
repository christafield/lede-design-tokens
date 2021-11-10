const tinycolor = require('tinycolor2');

/**
 * Decrease lightness by a specific percentage.
 * @param {string} value Color string.
 * @param {number} shade Amount to shade (or darken) color, expressed as a percent.
 * @returns
 */
const shade = (value, shade) => {
  const hsl = tinycolor(value).toHsl();
  const shadeAmount = 1 - (shade / 100);

  return tinycolor({
    ...hsl,
    l: hsl.l * shadeAmount,
  }).toHexString();
};

module.exports = shade;
