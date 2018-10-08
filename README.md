# removeAt 

> Removes an item from an array based on index.

## Install

```
$ npm install --save removeat
```

## Usage

```js
const removeAt = require('removeat');

let nums = [1,3,5,7,9];
let newNums = removeAt(nums, 2);
// => [1,3,7,9]
```

## API

### removeAt(array, index)

Returns the modified array.

#### array

Type: `array`

The array to modify.

#### index

Type: `index`

Position where to modify the array.

## License

MIT © [Kevin Freistroffer]
