import vue from 'rollup-plugin-vue'
import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/elm.vue',
  output: [
    {
      file: 'dist/vue-elm-components.js',
      name: 'vue-elm-components',
      format: 'umd',
      sourcemap: true
    },
    {
      file: 'dist/lib.js',
      name: 'lib',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    vue({
      compileTemplate: true,
      include: /\.vue$/,
      target: 'browser',
      exclude: [/node_modules/]
    }),
    buble({
      objectAssign: 'Object.assign',
      jsx: 'h'
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    uglify(),
  ]
};