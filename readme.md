# AWS has region

Check wether or not the aws-sdk has a configured region, without loading any clients into memory.

## Installation

```sh
npm install --save aws-has-region
```

## Usage

```js
const awsHasRegion = require('aws-has-region')

if (!(await awsHasRegion())) {
  console.error(awsHasRegion.errorText)
  process.exit(1)
}

// ...
```

## API

### `awsHasRegion() => Promise<boolean>`

Returns true if the AWS SDK region config is set, otherwise false.

### `awsHasRegion.errorText`

A error message that can be printed if the region is not set.
