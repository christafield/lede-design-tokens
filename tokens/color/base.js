const tinycolor = require('tinycolor2');

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
          value: tinycolor(baseColors.white).darken(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.white).darken(20).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        30: {
          value: tinycolor(baseColors.white).darken(30).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        35: {
          value: tinycolor(baseColors.white).darken(35).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        65: {
          value: tinycolor(baseColors.white).darken(65).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        70: {
          value: tinycolor(baseColors.white).darken(70).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        80: {
          value: tinycolor(baseColors.white).darken(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.white).darken(90).toHexString(),
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
          value: tinycolor(baseColors.red).lighten(90).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.red).lighten(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.red).lighten(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: tinycolor(baseColors.red).darken(10).toHexString(),
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
          value: tinycolor(baseColors.orange).lighten(90).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.orange).lighten(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.orange).lighten(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: tinycolor(baseColors.orange).darken(10).toHexString(),
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
          value: tinycolor(baseColors.green).lighten(90).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        20: {
          value: tinycolor(baseColors.green).lighten(80).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        90: {
          value: tinycolor(baseColors.green).lighten(10).toHexString(),
          attributes: {
            figmaType: 'color'
          }
        },
        110: {
          value: tinycolor(baseColors.green).darken(10).toHexString(),
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