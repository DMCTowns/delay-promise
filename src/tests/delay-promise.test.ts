import { describe, expect, test, jest } from '@jest/globals'
import { delayPromise } from '../index.js'

describe('Set property', () => {
  jest.spyOn(global, 'setTimeout')

  test('waits 1 second before returning the result', async () => {
    return delayPromise('foo').then(result => {
      expect(result).toBe('foo')
      expect(setTimeout).toHaveBeenCalledTimes(1)
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
      return true
    })
  })

  test('waits 2 seconds before returning the result', async () => {
    return delayPromise('foo', 2000).then(result => {
      expect(result).toBe('foo')
      expect(setTimeout).toHaveBeenCalledTimes(2)
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)
      return true
    })
  })
})
