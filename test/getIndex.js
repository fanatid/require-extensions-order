var test = require('tape')
var reo = require('../')

test('getIndex', function (t) {
  t.same(reo.getIndex('.node'), 2)
  t.end()
})
