# Rollup Plugin Indexer

## Description

This package was made as a way to convert the function "indexer" from the package "ts-cornucopia" as part of the rollup's execution instead of being run manually.

After this plugin is executed, any folder selected for its execution should have an index file which imports and exports all other files inside same folder (including other folders), this is always recursive.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Tests](#tests)
-   [License](/LICENSE.md)

## Installation

```
npm install --save-dev rollup-plugin-indexer
```

## Usage

The possible parameters that this plugin accept are the same of the indexer from the package ts-cornucopia, therefore, the details can be found in this [documentation](https://github.com/NDA-Software/ts-cornucopia/blob/master/docs/scripts/indexer.md).

Bellow is a quick example of usage of the indexer with typescript. Most of times you will probably want to run this plugin before all others as other files may expect the imports and exports to be already correct by buildStart.

```
import typescript from 'rollup-plugin-typescript2';
import indexer from "rollup-plugin-indexer";

export default [{
    input: 'src/index.ts',
    output: [{
        exports: 'named',
        preserveModules: true,
        interop: 'auto',
        dir: '.build/',
        format: 'esm'
    }],
    plugins: [
        indexer("./src"),
        typescript({
            tsconfig: 'tsconfig.json',
            outDir: '.build/',
            include: [
                './src/**/*.ts'
            ]
        })
    ]
}
];

```

## Tests

To guarantee conformity after bundling the test script runs only with the bundled codes. Which means you have to build before running it:

```
npm run build

npm run test
```
