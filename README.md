<p align="center">
  <a target="_blank" href="https://vuejs.org">
    <img
      height="80"
      style="padding:10px"
      alt="Vue logo"
      src="https://raw.githubusercontent.com/amirmahdimajedi/vue-elm-components/master/assets/logos/vue.svg"
    >
  </a>
  <a target="_blank" href="https://elm-lang.org">
    <img
      height="80"
      style="padding:10px"
      alt="Elm logo"
      src="https://raw.githubusercontent.com/amirmahdimajedi/vue-elm-components/master/assets/logos/elm.svg"
    >
  </a>
</p>

# vue-elm-components

> Simply embed Elm apps as components into your Vue.js applications

This package makes it easy to turn Elm code into Vue.js components.

Companies that use [Elm](http://elm-lang.org/) in production usually start small. Read more about how to use Elm at work [here](http://elm-lang.org/blog/how-to-use-elm-at-work).

## Current stage of development <prototype>

### Immediate goal: Add demos for Elm 0.18 and 0.19

## Usage

### Basic Usage

If you have an Elm app, you can import it using the [elm-webpack-loader](https://github.com/elm-community/elm-webpack-loader) and embed it in your Vue code like this:

```html
<template>
  <v-elm :src="Counter" />
</template>

<script>
import VElm from 'vue-elm-components'

import { Counter } from '@/path/to/file/Counter.elm'

export default {
  data: { Counter },
  components: { VElm }
}
</script>
```

### Flags

Sometimes you want to give your Elm program some **flags** on start up. Let's say we want our counter to start at 5. You would write something like this:

```html
<template>
  <v-elm
    :src="Counter"
    :flags="flags"
  />
</template>

<script>
import VElm from 'vue-elm-components'

import { Counter } from '@/path/to/file/Counter.elm'

export default {
  data: {
    Counter,
    flags: { start: 5 }
  },
  components: { VElm }
}
</script>
```

These flags will be given to the Elm program, allowing you to do some setup work in your Vue code first.


### JavaScript/Elm Interop

As your Elm program gets fancier, you will probably need to interact with JavaScript. We do this with **ports**. Think of these as holes in the side of an Elm program that let you pass messages back-and-forth.

So maybe we extend our app to allow outsiders to the counter through the `counter` port. And maybe we also expose the current count so that the outsider can subscribe to it using the `countChanged` port. You would set it up like this:

```html
<template>
  <v-elm
    :src="Counter"
    :ports="setupPorts"
  />
</template>

<script>
import VElm from 'vue-elm-components'

import { Counter } from '@/path/to/file/Counter.elm'

export default {
  data: {
    Counter,
    currentCount: 0,
  },
  methods: {
    setupPorts(ports) {
      ports.countChanged.subscribe((n) => {
        this.currentCount = n;
      });
      ports.counter.send(1);
      ports.counter.send(1);
    }
  },
  components: { VElm }
}
</script>
```

## Advanced Usage

Once the Elm component is initialized, changing the `flags` and `ports` properties will do nothing. So here are some tricks that may help you out:

  1. If you want to reinitialize your Elm component, add a different `key` to the old and new components. This way old one is destroyed and replaced by the new one.
  2. This package is super simple. Check out the implementation and do it different if you want!
  3. You can also use compiled versions of your elm app (`.js` outputs) if you find it easier.
  4. The default export from an Elm module (`.elm` or compiled to `.js`) is an object which contains your app as a property. For example, you can imagine that a file named `Counter.elm`, or its compiled counterpart named `dist/counter.js` will export something like this:
```javascript
export default {
  Counter: {
    Main: {
      embed: [[Function]], // version 0.18 and prior
      init:  [[Function]], // since version 0.19
    }
  }
}
```


## Angular, Ember, etc.

If you want to embed Elm in something else, you are in luck!

[The implementation](src/elm.vue) is pretty short, mostly Vue-related. The important lines are basically running the following program at the correct time:

```javascript
import { App } from "@/path/to/file/App.elm";
var app = App.embed(node, flags);
setupPorts(app.ports)
```

So if you are interested in embedding Elm in something else, do the same trick! You can get more complete docs on embedding Elm in JS [here](https://guide.elm-lang.org/interop/) Let the community know if you make something!


---

This package was inspired by [react-elm-components](https://github.com/cultureamp/react-elm-components/) which is maintained by the good folks at Culture Amp.