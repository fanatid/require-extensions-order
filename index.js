'use strict'

function get () {
  return Object.keys(require.extensions)
}

function set (exts) {
  if (!Array.isArray(exts)) throw new TypeError('Expected Array of Strings')
  var isAllString = exts.every(function (ext) { return typeof ext === 'string' })
  if (!isAllString) throw new TypeError('Expected Array of Strings')

  if (exts.length !== get().length) throw new RangeError('Number of extensions is not much')

  var allExists = exts.every(function (ext) { return require.extensions[ext] !== undefined })
  if (!allExists) throw new Error('Not all given extensions exists')

  exts.forEach(function (ext) {
    var loader = require.extensions[ext]
    delete require.extensions[ext]
    require.extensions[ext] = loader
  })
}

function getIndex (ext) {
  return get().indexOf(ext)
}

function setIndex (ext, index) {
  if (typeof ext !== 'string') throw new TypeError('Expected extension as String')
  if (require.extensions[ext] === undefined) throw new Error('Given extension is not exists')

  var exts = get()
  if ((index < 0 || index >= exts.length) || isNaN(index)) throw new RangeError('Invalid index')

  exts.splice(index, 0, exts.splice(exts.indexOf(ext), 1)[0])
  set(exts)
}

module.exports = {
  get: get,
  set: set,
  getIndex: getIndex,
  setIndex: setIndex
}
