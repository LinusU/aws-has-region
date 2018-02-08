/* Populate AWS with the config property */
require('aws-sdk/lib/node_loader')

/* Load minimal AWS library */
const AWS = require('aws-sdk/lib/core')

/* Export check function */
module.exports = function awsHasRegion () {
  return Boolean(AWS.config.region)
}

module.exports.errorText = '\u001b[1mMissing `region` from AWS config.\u001b[22m\nPlease set the AWS_REGION environmental variable, or specify a default region in your AWS CLI config.'
