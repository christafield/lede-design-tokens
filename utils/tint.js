const tinycolor = require('tinycolor2');

/**
 * Increase lightness by a specific percentage.
 * @param {string} value Color string.
 * @param {number} tint Amount to tint (or lighten) color, expressed as a percent.
 * @returns
 */
const tint = (value, tint) => {
  const hsl = tinycolor(value).toHsl();
  const lightnessModifier = (tint / 100) + 1;
  const saturationModifier = 1 - (tint / 100)

  return tinycolor({
    ...hsl,
    s: hsl.s * saturationModifier,
    l: hsl.l * lightnessModifier,
  }).toHexString();
};

module.exports = tint;
