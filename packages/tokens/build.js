import StyleDictionary from "style-dictionary";
StyleDictionary.extend({
  source: ['./src/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'lib/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables'
      }]
    }
  }
});

StyleDictionary.buildAllPlatforms();
