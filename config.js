const yaml = require('yaml');
const StyleDictionary = require('style-dictionary');
const figmaTokens = require('./formats/figmaTokens');

StyleDictionary.registerFormat({
  name: `json/figma-tokens`,
  formatter: figmaTokens
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
      transforms: ['name/cti/kebab'],
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