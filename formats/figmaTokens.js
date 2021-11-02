/**
 * Recursively construct tokens object using Figma Tokens format
 * @param {object} tokenObj nested tokens object.
 */
const constructRecursive = (tokenObj) => {
  if (tokenObj.value) {
    if (tokenObj.attributes.figmaType) {
      return {
        value: tokenObj.value,
        description: tokenObj.comment || '',
        type: tokenObj.attributes.figmaType || 'other',
      };
    } else {
      return null;
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
