import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/, // Ensure CommonJS modules are processed
    }),
    postcss({
      inject: true, // ✅ Automatically inject CSS when JS is imported
      minimize: true,
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'], // ✅ Ensure Babel processes .js and .jsx files
      presets: ['@babel/preset-env', '@babel/preset-react'], // ✅ Enable React JSX processing
      exclude: 'node_modules/**', // Avoid processing dependencies
    }),
  ],
  external: ['react', 'react-router-dom', 'react-dom', 'prop-types'],
}
