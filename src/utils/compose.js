// copy from recompose source code
// https://github.com/acdlite/recompose

export default (...funcs) =>
  funcs.reduce(
    (a, b) => (...args) => a(b(...args)),
    (arg) => arg
  );
