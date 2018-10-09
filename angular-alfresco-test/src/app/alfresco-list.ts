export interface Alfresco {
  list: {
    pagination: {
      count: number,
      hasMoreItems: boolean,
      totalItems: number,
      skipCount: number,
      maxItems:number
    },
    entries: [
      {
        entry: {
          targetGuid: string,
          target: {}
        }
      }]
  }
}
