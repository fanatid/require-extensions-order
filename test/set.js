var test = require('tape')
var reo = require('../')

test('set', function (t) {
  t.test('without arguments', function (t) {
    t.throws(function () {
      reo.set()
    }, /TypeError: Expected Array of Strings/)
    t.end()
  })

  t.test('not string in array', function (t) {
    t.throws(function () {
      reo.set([ null ])
    }, /TypeError: Expected Array of Strings/)
    t.end()
  })

  t.test('empty array', function (t) {
    t.throws(function () {
      reo.set([])
    }, /RangeError: Number of extensions is not much/)
    t.end()
  })

  t.test('pass wrong extensions', function (t) {
    t.throws(function () {
      reo.set([ '.js', '.json', '.node42' ])
    }, /Error: Not all given extensions exists/)
    t.end()
  })

  t.test('change order', function (t) {
    t.same(reo.get(), [ '.js', '.json', '.node' ])
    reo.set([ '.json', '.js', '.node' ])
    t.same(reo.get(), [ '.json', '.js', '.node' ])
    t.end()
  })

  t.end()
})
