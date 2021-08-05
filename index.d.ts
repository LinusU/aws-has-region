declare namespace awsHasRegion {
  const errorText: string
}

declare function awsHasRegion (): Promise<boolean>

export = awsHasRegion
