// 'npm install -D del' - https://www.npmjs.com/package/del
const del = require('del')

module.exports = (on: (arg0: string, arg1: (spec: any, results: any) => any) => void, config: any) => {
  on('after:spec', (spec, results) => {
    if (results.stats.failures === 0 && results.video) {
      // `del()` returns a promise, so it's important to return it to ensure
      // deleting the video is finished before moving on
      return del(results.video)
    }
  })
}
