/**
 * Rollup configs
 */

const aliasConfig = {
  modules: `${__dirname}/src/modules`,
  components: `${__dirname}/src/components`,
  utils: `${__dirname}/src/utils`,
  assets: `${__dirname}/assets`,
  svgs: `${__dirname}/src/svgs`,
  state: `${__dirname}/src/state`,
}

const copyConfig = {
  targets: [
    { src: 'assets', dest: 'build/' },
    { src: 'public/manifest.json', dest: 'build/' },
    // { src: 'public/service-worker.js', dest: 'build/'},
    { src: 'public/offline.html', dest: 'build/' },
  ],
  verbose: true,
}

/**
 * Currently, the app name are static to `app.js`, but for a
 * random name of app file use: `app-${new Date().getTime()}.js`
 */
const appBundle = 'app.js'

/**
 * Export all Rollup
 * configs as a single object
 */
export { aliasConfig, copyConfig, appBundle }
