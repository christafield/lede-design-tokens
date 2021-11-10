const tinycolor = require('tinycolor2');
const tint = require('../../utils/tint');
const shade = require('../../utils/shade');
const baseColors = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#E53935',
  orange: '#FF6D00',
  green: '#4CAF50',
};

module.exports = {
  color: {
    base: {
      gray: {
        0: {
          value: baseColors.white,
          attributes: {
            figmaType: 'color'
          }
        },
        10: {
          value: tinycolor(baseColors.white).darken(10).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.white).darken(20).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        30: {
          value: tinycolor(baseColors.white).darken(30).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        35: {
          value: tinycolor(baseColors.white).darken(35).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        65: {
          value: tinycolor(baseColors.white).darken(65).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        70: {
          value: tinycolor(baseColors.white).darken(70).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tinycolor(baseColors.white).darken(80).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.white).darken(90).toString(),
          attributes: {
            figmaType: 'color'
          }
        },
        100: {
          value: baseColors.black,
          attributes: {
            figmaType: 'color'
          }
        }
      },
      white: {
        value: baseColors.white,
        attributes: {
          figmaType: 'color'
        }
      },
      black: {
        value: baseColors.black,
        attributes: {
          figmaType: 'color'
        }
      },
      red: {
        10: {
          value: tint(baseColors.red, 90),
          attributes: {
            figmaType: 'color'
          }
        },
        30: {
          value: tint(baseColors.red, 70),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tint(baseColors.red, 20),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: shade(baseColors.red, 10),
          attributes: {
            figmaType: 'color'
          }
        },
        base: {
          value: baseColors.red,
          attributes: {
            figmaType: 'color'
          }
        }
      },
      orange: {
        10: {
          value: tint(baseColors.orange, 90),
          attributes: {
            figmaType: 'color'
          }
        },
        30: {
          value: tint(baseColors.orange, 70),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tint(baseColors.orange, 20),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: shade(baseColors.orange, 10),
          attributes: {
            figmaType: 'color'
          }
        },
        base: {
          value: baseColors.orange,
          attributes: {
            figmaType: 'color'
          }
        }
      },
      green: {
        10: {
          value: tint(baseColors.green, 90),
          attributes: {
            figmaType: 'color'
          }
        },
        30: {
          value: tint(baseColors.green, 70),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tint(baseColors.green, 20),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: shade(baseColors.green, 10),
          attributes: {
            figmaType: 'color'
          }
        },
        base: {
          value: baseColors.green,
          attributes: {
            figmaType: 'color'
          }
        }
      }
    }
  }
};
