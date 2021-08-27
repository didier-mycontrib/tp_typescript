export default {
  input: 'dist/out-tsc/fig-canvas.js',
  output : {
	file: 'dist/build-es2015/fig-bundle.js',
	format: 'iife',
    name : "figapp"
  }
};
