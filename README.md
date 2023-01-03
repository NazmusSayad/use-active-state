# use-active-state

This package helps to get if an element is focused or not.

<a href="https://npmjs.com/package/use-active-state">
  <img src="https://img.shields.io/npm/v/use-active-state" alt="npm package"> 
</a>

---

## Installation

- with npm

```shell
npm i use-active-state
```

- with yarn

```shell
yarn add use-active-state
```

- with pnpm

```shell
pnpm add use-active-state
```

<br/> <br/>

## Usages:

`/* Component.js */`

```js
import useActiveState from 'use-active-state'

const Component = () => {
  const [isActive, setIsActive, ref] = useActiveState()

  console.log(isActive)

  return (
    <button
      ref={ref}
      onClick={() => {
        setIsActive(true)
      }}
    >
      Click me
    </button>
  )
}
```

```js
import { useRef } from 'react'
import useActiveState from 'use-active-state'

const Component = () => {
  const ref = useRef()
  const [isActive, setIsActive] = useActiveState(ref)

  console.log(isActive)

  return (
    <button
      ref={ref}
      onClick={() => {
        setIsActive(true)
      }}
    >
      Click me
    </button>
  )
}
```

```js
import { useId } from 'react'
import useActiveState from 'use-active-state'

const Component = () => {
  const id = useId()
  const [isActive, setIsActive] = useActiveState(`[id="${id}"]`)

  console.log(isActive)

  return (
    <button
      id={id}
      onClick={() => {
        setIsActive(true)
      }}
    >
      Click me
    </button>
  )
}
```

<br/>

## Arguments of `setIsActive()` :

`setIsActive()` takes one argument (not required)

- `true` makes active state to `true`
- `false` makes active state to `false`
- else this will toggle active state

<br/>

Made by [Nazmus Sayad](https://github.com/NazmusSayad) with ❤️.
