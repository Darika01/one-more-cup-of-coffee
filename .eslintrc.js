module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:flowtype/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],

    rules: {
        'react-hooks/rules-of-hooks': 'error', // Sprawdza stosowanie zasad hooków
        'react-hooks/exhaustive-deps': 'warn', // Sprawdza zależności efektów
        'flowtype/boolean-style': [2, 'boolean'],
        'flowtype/define-flow-type': 1,
        'flowtype/delimiter-dangle': [2, 'never'],
        'flowtype/generic-spacing': [2, 'never'],
        'flowtype/no-mixed': 2,
        'flowtype/no-primitive-constructor-types': 2,
        'flowtype/no-types-missing-file-annotation': 2,
        // 'flowtype/no-weak-types': 2,
        'flowtype/object-type-delimiter': [2, 'comma'],
        // 'flowtype/require-parameter-type': 2,
        'flowtype/require-readonly-react-props': 0,
        // 'flowtype/require-return-type': [
        //     2,
        //     'always',
        //     {
        //         annotateUndefined: 'never'
        //     }
        // ],
        'flowtype/require-valid-file-annotation': 2,
        'flowtype/semi': [2, 'always'],
        'flowtype/space-after-type-colon': [2, 'always'],
        'flowtype/space-before-generic-bracket': [2, 'never'],
        'flowtype/space-before-type-colon': [2, 'never'],
        // 'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]+)+Type$'],
        'flowtype/union-intersection-spacing': [2, 'always'],
        'flowtype/use-flow-type': 1,
        'flowtype/valid-syntax': 1
    },
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            version: 'detect' // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
        },
        propWrapperFunctions: [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' }
        ],
        linkComponents: [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            'Hyperlink',
            { name: 'Link', linkAttribute: 'to' }
        ],
        flowtype: {
            onlyFilesWithFlowAnnotation: false
        }
    }
};
