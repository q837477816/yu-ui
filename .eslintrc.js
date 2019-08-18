module.exports = {
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "rules": {
        // enable additional rules
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],

        // override default options for rules from base configurations
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
    },
    "plugins": [
        "vue"
    ]
}