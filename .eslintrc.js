module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": "off",
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
     "jsx-a11y/label-has-for": 0
  }
};
