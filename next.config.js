const withTM = require('next-transpile-modules')(['@babylonjs/core', '@babylonjs/gui', 'react-babylonjs', '@babylonjs/loaders']);

module.exports = withTM(/* your Next.js config */);