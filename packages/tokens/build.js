require("style-dictionary").extend({
    source: ['./src/**/*.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'lib/',
            files: [
                {
                    destination: 'index.css',
                    format: 'css/variables'
                }
            ]
        },
        js: {
            transformGroup: "js",
            transforms: ["name/cti/camel"],
            buildPath: 'lib/',
            files: [
                {
                    format: "javascript/es6",
                    destination: "index.js"
                },
                {
                    format: "javascript/module-flat",
                    destination: "index.module.js"
                },
                {
                    format: "typescript/es6-declarations",
                    destination: "index.d.ts"
                }
            ]
        },
    }
}).buildAllPlatforms();
