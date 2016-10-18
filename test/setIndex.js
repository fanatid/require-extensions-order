var test = require('tape')
var reo = require('../')

test('setIndex', function (t) {
  t.test('call without arguments', function (t) {
    t.throws(function () {
      reo.setIndex()
    }, /TypeError: Expected extension as String/)
    t.end()
  })

  t.test('pass wrong extension', function (t) {
    t.throws(function () {
      reo.setIndex('42')
    }, /Error: Given extension is not exists/)
    t.end()
  })

  t.test('invalid index', function (t) {
    t.throws(function () {
      reo.setIndex('.js', 42)
    }, /RangeError: Invalid index/)
    t.end()
  })

  t.test('move extension handler', function (t) {
    t.same(reo.get(), [ '.js', '.json', '.node' ])
    reo.setIndex('.json', 0)
    t.same(reo.get(), [ '.json', '.js', '.node' ])
    t.end()
  })

  t.end()
})
