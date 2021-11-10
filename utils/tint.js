const tinycolor = require('tinycolor2');

/**
 * Increase lightness by a specific percentage.
 * @param {string} value Color string.
 * @param {number} tint Amount to tint (or lighten) color, expressed as a percent.
 * @returns
 */
const tint = (value, tint) => {
  const hsl = tinycolor(value).toHsl();
  const modifier = (tint / 100) + 1;

  return tinycolor({
    ...hsl,
    l: (1 - hsl.l) * modifier,
  }).toHexString();
};

module.exports = tint;
