export const delayPromise = async <T = any>(item: T, delay: number = 1000): Promise<T> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(item)
    }, delay)
  })

export default delayPromise
