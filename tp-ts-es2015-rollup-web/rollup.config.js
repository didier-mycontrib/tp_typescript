export default {
  input: 'dist/out-tsc/svg-fig.js',
  output : {
	file: 'dist/build-es2015/app-bundle.js',
	format: 'iife',
    name : "myapp"
  }
};
