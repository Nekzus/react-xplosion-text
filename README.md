# React Xplosion Animation

[![Github Workflow](https://github.com/nekzus/react-xplosion-text/actions/workflows/publish.yml/badge.svg?event=push)](https://github.com/Nekzus/hacker-effect-text/actions/workflows/publish.yml)
[![npm-version](https://img.shields.io/npm/v/@nekzus/react-xplosion.svg)](https://www.npmjs.com/package/@nekzus/react-xplosion)
[![npm-month](https://img.shields.io/npm/dm/@nekzus/react-xplosion.svg)](https://www.npmjs.com/package/@nekzus/react-xplosion)
[![npm-total](https://img.shields.io/npm/dt/@nekzus/react-xplosion.svg?style=flat)](https://www.npmjs.com/package/@nekzus/react-xplosion)

`Xplosion` is a React component that creates an explosion animation for text.

## Installation

To install the library using npm, run the following command:

```bash
npm install @nekzus/react-xplosion
```

## Usage

```jsx
import React from 'react';
import Xplosion from '@nekzus/react-xplosion';


const App = () => {
  return (
    <Xplosion textInput="Hello, world!" className="my-custom-class">
      <button>Click here!</button>
    </Xplosion>
  );
};

export default App;
```

In this example, the HackerEffectText component wraps around your content, animating the transition from the initialValue ("Access Granted") to the targetValue ("Welcome to the System"). The capitalize prop is set to true, giving the text a distinct uppercase hacker aesthetic.

## Props
children: Child components to which the explosion will be applied.
className: Custom CSS classes to be added to the explosion.
textInput: Text to be exploded.

## Example


```jsx
<Xplosion textInput="Hello, world!" className="my-custom-class">
  <h1>My Custom Explosion</h1>
</Xplosion>
```

<!-- ## Codesandbox -->

<!-- [Link](https://codesandbox.io/p/devbox/react-hacker-effect-yw5ykh) -->

## License
This project is licensed under the MIT License - see the LICENSE file for details.


