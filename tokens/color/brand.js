const tinycolor = require('tinycolor2');
const tint = require('../../utils/tint');
const shade = require('../../utils/shade');
const baseColors = {
  primary: '#510A7F',
  secondary: '#F6212E',
  accent: '#FFDC2E',
};
console.log(tint(baseColors.primary, 50));

module.exports = {
  color: {
    brand: {
      primary: {
        10: {
          value: tint(baseColors.primary, 90),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tint(baseColors.primary, 80),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tint(baseColors.primary, 10),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: shade(baseColors.primary, 10),
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
          value: tinycolor(baseColors.secondary).lighten(50).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        60: {
          value: tinycolor(baseColors.secondary).lighten(40).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.secondary).lighten(10).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: tinycolor(baseColors.secondary).darken(10).toString(),
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
          value: tinycolor(baseColors.accent).lighten(50).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        60: {
          value: tinycolor(baseColors.accent).lighten(40).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.accent).lighten(10).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: tinycolor(baseColors.accent).darken(10).toString(),
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
