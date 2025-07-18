const ReactCompilerConfig = { /* ... optional config (add when necessary) ... */ };

module.exports = function () {
  return {
    plugins: [
      ['babel-plugin-react-compiler', ReactCompilerConfig],
    ],
  };
};