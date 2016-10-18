var test = require('tape')
var reo = require('../')

test('get', function (t) {
  t.same(reo.get(), [ '.js', '.json', '.node' ])
  t.end()
})
