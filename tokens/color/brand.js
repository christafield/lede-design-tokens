const tinycolor = require('tinycolor2');

const baseColors = {
  primary: '#510A7F',
  secondary: '#F6212E',
  accent: '#FFDC2E',
};


module.exports = {
  color: {
    brand: {
      primary: {
        50: {
          value: tinycolor(baseColors.primary).lighten(50).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        60: {
          value: tinycolor(baseColors.primary).lighten(40).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.primary).lighten(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: tinycolor(baseColors.primary).darken(10).toHexString(),
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
        50: {
          value: tinycolor(baseColors.secondary).lighten(50).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        60: {
          value: tinycolor(baseColors.secondary).lighten(40).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.secondary).lighten(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: tinycolor(baseColors.secondary).darken(10).toHexString(),
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
        50: {
          value: tinycolor(baseColors.accent).lighten(50).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        60: {
          value: tinycolor(baseColors.accent).lighten(40).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.accent).lighten(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: tinycolor(baseColors.accent).darken(10).toHexString(),
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
