import { aliasConfig, appBundle } from './config/rollup'
import { string } from 'rollup-plugin-string'
import { terser } from 'rollup-plugin-terser'
import { version } from './package.json'
import alias from '@rollup/plugin-alias'
import analyze from 'rollup-plugin-analyzer'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import dotenv from 'dotenv'
import filesize from 'rollup-plugin-filesize'
import html from 'rollup-plugin-html-scaffold'
import json from '@rollup/plugin-json'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import replace from '@rollup/plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import stylus from 'rollup-plugin-stylus-to-css'

dotenv.config({
  path: '.env.production',
})

export default [
  {
    input: ['src/index.js'],
    output: {
      file: `build/${appBundle}`,
      format: 'umd',
      sourcemap: false,
    },
    plugins: [
      nodePolyfills(),
      progress(),
      alias({
        resolve: ['.styl', '.css', '.svg', '/index.js'],
        entries: aliasConfig,
      }),
      html({
        input: './public/index.html',
        output: './public/index.html',
        template: { appBundle },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.APP_ASSETS_URL': JSON.stringify(process.env.APP_ASSETS_URL),
        'process.app.version': version,
        'process.app.enviroment': 'production',
      }),
      string({ include: '**/*.html' }),
      json(),
      stylus(),
      postcss({
        include: '**/*.css',
        extensions: ['.css', '.sss', '.stylus', '.styl', '.pcss', '.scss'],
      }),
      resolve(),
      babel(),
      commonjs(),
      terser(),
      analyze(),
      filesize(),
    ],
  },
]
