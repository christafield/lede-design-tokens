# Lede Design Tokens
This repository is the home for all of Lede's platform-wide design tokens. We use [Style Dictionary](https://amzn.github.io/style-dictionary/#/) to transform design tokens defined in YAML, JSON, or JS to any of a number of different formats. This allows us to maintain a single source of truth for our design decisions and keep consistency and clarity across the platform, including publisher site front- and back-ends, publisher dashboard, Patagonia, and eventually more.

## Setup
Setting up this repository locally is as simple as running `npm install`. Once you've modified, added, or removed tokens to your satisfaction, run `npm run build` before pushing your changes to make sure your changes are functioning as expected.

## Sources
Tokens are sourced from the `tokens` directory and are all written in YAML. Additional formats are available if necessary in the future (JSON, JSON5, and JS). Below are some guidelines for creating new tokens:
* Proper nesting is important, as it dictates how [value transforms are applied](https://amzn.github.io/style-dictionary/#/transforms?id=pre-defined-transforms). For example, any token under the top-level `size` key or with `attributes.category === 'size'` will be transformed using `size/rem` for CSS and SCSS.
* Tokens will be flattened in output, using kebab-case to string together all nested keys. For example, a token under `size.font.xl` will result in `--size-font-xl` in CSS output. This means you can use the same token name in multiple places without clashing.
* Don't be afraid to split new tokens up into their own files. Making tokens clearly, consistently categorized and easy to find is more important than being concise.

## Output
Design tokens are output in several format for different purposes. You can run `npm run build` to regenerate each of the below output files.
* `schema.json` - A verbose JSON schema containing all data and metadata about each token.
* `tokens.json` - Tokens for use in Figma. These tokens are implemented with the [Figma Tokens plugin](https://docs.tokens.studio/) and accessed via the [github sync feature].
* `variables.css` - Tokens represented as CSS custom properties.
* `variables.scss` - Tokens represented as SCSS variables.

## Contributing
Any contribution to this repository should go through one of two Github workflows. For working locally:
* Make a feature branch for your work based on `main`.
* Do your work and commit it.
* Push your branch to the Github remote and create a pull request.
* Get a Code Review from one of your peers.

Or you can work directly in Github:
* Find the file you want to edit within github (generally this will be a file in the `tokens` directory)
* Click the pencil icon in the upper right of the area in which the code is displayed.
* Make any required changes.
* Use the interface below the built-in editor to write a descriptive commit message.
* Select `Create a new branch for this commit and start a pull request`.
* Edit the branch name if necessary
* Click `Propose changes` and get a code review from one of your peers.

Because we are in the early stages of Lede development and we'll be working quickly, the last stage (code review) is not completely necessary, but definitely recommended. The most important thing is that we are version controlling our Design Tokens.

## Making New Tokens
Below are some criteria to consider when making a new design token. These will likely change as we continue development, so think of them as points for discussion and not hard and fast requirements.
* Do you think the token will be required in multiple features (or verticals) of the platform? If you're unsure, lean toward not making it a token—you can always move it into the tokens repo later.
* Are there unnecessary or confusing design variances between components that this token will make consistent?
* Will components need to change the value of this token independently, or can they all use the same value?
