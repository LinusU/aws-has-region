import { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } from '@smithy/config-resolver'
import { loadConfig } from '@smithy/node-config-provider'

export default function awsHasRegion () {
  const provider = loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS)

  return provider().then((region) => region != null, () => false)
}

export const errorText = '\u001b[1mMissing `region` from AWS config.\u001b[22m\nPlease set the AWS_REGION environmental variable, or specify a default region in your AWS CLI config.'
