const yaml = require('yaml');
const StyleDictionary = require('style-dictionary');

const constructRecursive = (tokenObj) => {
  if (typeof tokenObj !== 'object' || Array.isArray(tokenObj)) {
    return tokenObj;
  }

  if (tokenObj.value) {
    if (tokenObj.attributes.figmaType) {
      return {
        value: tokenObj.value,
        description: tokenObj.description || '',
        type: tokenObj.attributes.figmaType || 'other',
      };
    } else {
      return null;
    }
  } else {
    const returnObj = Object.keys(tokenObj).reduce((acc, name) => {
      if (tokenObj[name]) {
        const nextVal = constructRecursive(tokenObj[name]);
        console.log(nextVal);

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

StyleDictionary.registerFormat({
  name: `json/figma-tokens`,
  formatter: function({ dictionary }) {
    // const tokenMap = dictionary.allTokens.reduce((acc, token) => {
    //   let value = JSON.stringify(token.value);

    //   if (dictionary.usesReference(token.original.value)) {
    //     const refs = dictionary.getReferences(token.original.value);
    //     refs.forEach((ref) => {
    //       value = value.replace(ref.value, () => `${ref.name}`);
    //     });
    //   }

    //   // Only return tokens with a valid type.
    //   if (token.attributes.figmaType) {
    //     return {
    //       ...acc,
    //       [token.name]: {
    //         value: token.value,
    //         description: token.description || '',
    //         type: token.attributes.figmaType || 'other',
    //       },
    //     };
    //   }

    //   return acc;
    // }, {});

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
  }
});

module.exports = {
  parsers: [{
    // A custom parser will only run against filenames that match the pattern
    // This pattern will match any file with the .yaml extension.
    // This allows you to mix different types of files in your token source
    pattern: /\.ya?ml$/,
    // the parse function takes a single argument, which is an object with
    // 2 attributes: contents which is a string of the file contents, and
    // filePath which is the path of the file.
    // The function is expected to return a plain object.
    parse: ({contents, filePath}) => yaml.parse(contents)
  }],
  source: [`tokens/**/*.yml`],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
      }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables',
        options: {
          outputReferences: true,
        },
      }]
    },
    schema: {
      buildPath: 'build/',
      files: [{
        destination: 'schema.json',
        format: 'json',
      }]
    },
    figma: {
      buildPath: 'build/',
      transforms: ['size/remToPx', 'name/cti/kebab'],
      files: [{
        destination: 'tokens.json',
        format: 'json/figma-tokens',
      }],
    },
  }
}