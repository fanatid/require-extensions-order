# require-extensions-order

[![NPM Package](https://img.shields.io/npm/v/require-extensions-order.svg?style=flat-square)](https://www.npmjs.org/package/require-extensions-order)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## API

#### `get` -> `Array<String>`

return list of extensions in loading order

#### `set(Array<String> extensions)`

set loading order

#### `getIndex(String extension)` -> `Number`

return loading index for `extension`

#### `setIndex(String extension, Number index)`

set loading index for `extension`

## Examples

```js
const reo = require('require-extensions-order')
console.log(reo.get()) // => [ '.js', '.json', '.node' ]

require('babel-register')
console.log(reo.get()) // => [ '.js', '.json', '.node', '.jsx', '.es6', '.es' ]

reo.setIndex('.es', 0)
console.log(reo.get()) // => [ '.es', '.js', '.json', '.node', '.jsx', '.es6' ]
```

## License

MIT
