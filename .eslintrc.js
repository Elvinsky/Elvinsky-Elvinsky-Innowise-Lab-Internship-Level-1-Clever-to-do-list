module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    plugins: [
        'vue',
    ],
    rules: {
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'quotes': ['warn', 'single'],
        'no-tabs': 'warn',
    },
};