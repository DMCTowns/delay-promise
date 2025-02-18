# Delay Promise

A function to return a promise that resolves to a supplied object after a specified delay

## Installation

```
npm install @dmc-towns/delay-promise
```

## Usage

```typescript
import { delayPromise } from '@dmc-towns/delay-promise'

const result = await delayPromise('foo', 1000)
// result will contain a Promise that resolves to 'foo' after 1 second
```
