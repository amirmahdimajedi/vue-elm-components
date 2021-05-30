import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import elm from 'rollup-plugin-elm'

export default {
  input: 'src/elm.vue',
  output: [
    {
      file: 'dist/vue-elm-components.min.js',
      name: 'vue-elm-components.min.js',
      format: 'umd'
    },
    {
      file: 'dist/build.js',
      format: 'es'
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
    elm({
      include: /\.elm$/,
      target: 'browser',
      exclude: [/elm-stuff/, /node_modules/]
    })
  ]
};