module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
    plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
    rules: {
        'plugin/declaration-block-no-ignored-properties': true,
        'comment-empty-line-before': null,
        'declaration-empty-line-before': null,
        'function-name-case': 'lower',
        'no-descending-specificity': null,
        'no-invalid-double-slash-comments': null,
        'rule-empty-line-before': 'always',
        indentation: 4,
        'annotation-no-unknown': true,
        'block-no-empty': true,
    },
    ignoreFiles: ['node_modules/**/*', 'build/**/*'],
};
