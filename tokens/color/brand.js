const tinycolor = require('tinycolor2');

const baseColors = {
  primary: '#510A7F',
  secondary: '#fee9ea',
  accent: '#FFDC2E',
};


module.exports = {
  color: {
    brand: {
      primary: {
        10: {
          value: tinycolor(baseColors.primary).darken(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.primary).darken(20).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tinycolor(baseColors.primary).darken(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: tinycolor(baseColors.primary).darken(120).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        base: {
          value: baseColors.primary,
          attributes: {
            figmaType: 'color'
          }
        }
      },
      secondary: {
        10: {
          value: tinycolor(baseColors.secondary).darken(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.secondary).darken(20).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tinycolor(baseColors.secondary).darken(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: tinycolor(baseColors.secondary).darken(120).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        base: {
          value: baseColors.secondary,
          attributes: {
            figmaType: 'color'
          }
        }
      },
      accent: {
        10: {
          value: tinycolor(baseColors.accent).darken(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.accent).darken(20).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tinycolor(baseColors.accent).darken(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: tinycolor(baseColors.accent).darken(120).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        base: {
          value: baseColors.accent,
          attributes: {
            figmaType: 'color'
          }
        }
      }
    }
  }
};
