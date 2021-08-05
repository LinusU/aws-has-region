/* Load minimal AWS library */
const { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } = require('@aws-sdk/config-resolver')
const { loadConfig } = require('@aws-sdk/node-config-provider')

/* Export check function */
module.exports = function awsHasRegion () {
  const provider = loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS)

  return provider().then((region) => region != null, () => false)
}

module.exports.errorText = '\u001b[1mMissing `region` from AWS config.\u001b[22m\nPlease set the AWS_REGION environmental variable, or specify a default region in your AWS CLI config.'
