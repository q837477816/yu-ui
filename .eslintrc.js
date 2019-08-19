module.exports = {
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "comma-dangle": ["error", "never"],

        // override default options for rules from base configurations
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",

        "vue/html-indent": ["error", 4],
        "vue/max-attributes-per-line": ["error", {
            "singleline": 3,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }]
    },
    "plugins": [
        "vue"
    ]
}