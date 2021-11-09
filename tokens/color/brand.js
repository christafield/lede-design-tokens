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
        10: {
          value: tinycolor(baseColors.primary).lighten(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.primary).lighten(70).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tinycolor(baseColors.primary).lighten(20).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: tinycolor(baseColors.primary).darken(20).toHexString(),
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
          value: tinycolor(baseColors.secondary).lighten(90).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.secondary).lighten(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tinycolor(baseColors.secondary).lighten(20).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: tinycolor(baseColors.secondary).darken(20).toHexString(),
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
          value: tinycolor(baseColors.accent).lighten(90).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.accent).lighten(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tinycolor(baseColors.accent).lighten(20).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: tinycolor(baseColors.accent).darken(20).toHexString(),
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
