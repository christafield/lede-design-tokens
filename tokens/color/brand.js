const tint = require('../../utils/tint');
const shade = require('../../utils/shade');
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
          value: tint(baseColors.primary, 90),
          attributes: {
            figmaType: 'color'
          }
        },
        30: {
          value: tint(baseColors.primary, 70),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tint(baseColors.primary, 20),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: shade(baseColors.primary, 20),
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
          value: tint(baseColors.secondary, 90),
          attributes: {
            figmaType: 'color'
          }
        },
        30: {
          value: tint(baseColors.secondary, 70),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tint(baseColors.secondary, 20),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: shade(baseColors.secondary, 20),
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
          value: tint(baseColors.accent, 90),
          attributes: {
            figmaType: 'color'
          }
        },
        30: {
          value: tint(baseColors.accent, 70),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tint(baseColors.accent, 20),
          attributes: {
            figmaType: 'color'
          }
        },
        120: {
          value: shade(baseColors.accent, 20),
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
