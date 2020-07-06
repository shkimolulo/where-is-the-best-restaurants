module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/setup.js'],
      env: {
        jest: true,
      },
    },
  ],
};
