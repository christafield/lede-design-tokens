/**
 * Recursively construct tokens object using Figma Tokens format
 * @param {object} tokenObj nested tokens object.
 */
const constructRecursive = (tokenObj) => {
  const {
    value,
    comment,
    attributes: {
      description,
      figmaType,
    } = {},
  } = tokenObj;

  if (value) {
    if (figmaType) {
      return {
        value: value,
        description: comment || '',
        type: figmaType || 'other',
      };
    } else {
      return null;
    }
  } else {
    if (figmaType && figmaType === 'typography') {
      // Handle typography sets for figma that need to have a value set to an object.
      const valueObject = Object.keys(tokenObj).reduce((acc, name) => {
        if ('attributes' !== name) {
          return {
            ...acc,
            [name]: tokenObj[name].value,
          };
        }
      }, {});

      if (Object.keys(valueObject).length) {
        return {
          value: valueObject,
          description: comment || description || '',
          type: figmaType || 'other',
        };
      }
    } else {
      const returnObj = Object.keys(tokenObj).reduce((acc, name) => {
        if (tokenObj[name]) {
          const nextVal = constructRecursive(tokenObj[name]);

          if (nextVal) {
            return {
              ...acc,
              [name]: nextVal,
            };
          }

          return acc;
        }
      }, {});

      if (Object.keys(returnObj).length) {
        return returnObj;
      }

      return null;
    }
  }
}

/**
 * Custom format for generating nested JSON compatible with Figma Tokens.
 * @see https://docs.tokens.studio/
 * @param {object} args Arguments passed from style dictionary for custom formats.
 * @returns {string}
 */
const figmaTokens = ({ dictionary }) => {
  const tokenMap = constructRecursive(dictionary.tokens);

  return JSON.stringify(
    {
      values: {
        global: tokenMap,
      },
    },
    null,
    2
  );
};

module.exports = figmaTokens;
