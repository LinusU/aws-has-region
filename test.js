import assert from 'node:assert'
import awsHasRegion, { errorText } from 'aws-has-region'

async function test () {
  assert.strictEqual(typeof await awsHasRegion(), 'boolean')
  assert.strictEqual(typeof errorText, 'string')
}

test().catch((error) => {
  process.exitCode = 1
  console.error(error.stack)
})
