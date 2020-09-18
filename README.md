# Neo theme for TypeDoc

[![npm](https://img.shields.io/npm/v/typedoc-particles-theme.svg)](https://www.npmjs.com/package/typedoc-particles-theme)

This plugin contains a new theme for TypeDoc with [tsParticles](https://github.com/matteobruni/tsparticles) acting like an animated background.

[![preview](https://media.giphy.com/media/giXXSQoWhbEJQ9ZG5Y/giphy.gif)](https://particles.js.org)

Visit the [tsParticles reference](https://particles.js.org) to view this theme.

Visit http://typedoc.org/ to learn more about TypeDoc.

## Theme

Build the theme by running `npm run build` .

After you install the module, you can use this theme in a build by running:

 `typedoc --theme ./node_modules/typedoc-particles-theme/bin/particles`

### Typedoc options
This plugin adds additional options that can be placed in your `typedoc.json` file.

#### Links
You may want to specify additional links to appear in your header that don't point to
reference documentation but related documentation for your platform.

```json
"links": [{
    "label": "Official Website",
    "url": "https://particles.matteobruni.it"
  }, {
    "label": "Repository",
    "url": "https://github.com/matteobruni/tsparticles"
  }]
```
