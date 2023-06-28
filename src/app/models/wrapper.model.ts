export interface Wrapper<T> {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: T[]
}
