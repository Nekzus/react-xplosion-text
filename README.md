# React Xplosion Animation

[![Github Workflow](https://github.com/nekzus/react-xplosion-text/actions/workflows/publish.yml/badge.svg?event=push)](https://github.com/Nekzus/hacker-effect-text/actions/workflows/publish.yml)
[![npm-version](https://img.shields.io/npm/v/@nekzus/react-xplosion.svg)](https://www.npmjs.com/package/@nekzus/react-xplosion)
[![npm-month](https://img.shields.io/npm/dm/@nekzus/react-xplosion.svg)](https://www.npmjs.com/package/@nekzus/react-xplosion)
[![npm-total](https://img.shields.io/npm/dt/@nekzus/react-xplosion.svg?style=flat)](https://www.npmjs.com/package/@nekzus/react-xplosion)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Nekzus/react-xplosion-text)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/maseortega)

`Xplosion` is a React component that creates an explosion animation for text.

## Installation

To install the library using npm, run the following command:

```bash
npm install @nekzus/react-xplosion
```

## Usage

### Basic Implementation

The Xplosion component can be easily incorporated into your React application.
Simply provide the text you want to animate as the textInput prop:

```jsx
import React from "react";
import { Xplosion } from "@nekzus/react-xplosion";

const App = () => {
  return (
    <Xplosion textInput="Hello, world!" className="class-tw">
      <button>Click here!</button>
    </Xplosion>
  );
};

export default App;
```

### Props

The Xplosion component accepts the following props:

- textInput (required): The text to be animated explosively.
- className: Additional class names to be applied to the component tailwind CSS.
- colorClassName: A color class to specify the color scheme of the explosive
  animation. Available options: "blueColor", "greenColor", "pinkColor",
  "orangeColor", "darkColor", "lightColor".
- style: Additional styles to be applied to the component CSS.

### Example with Custom Styling

You can customize the appearance of the Xplosion component by providing
additional styles or class names:

```jsx
import React from "react";
import { Xplosion } from "@nekzus/react-xplosion";

const App = () => {
  return (
    <Xplosion
      textInput="Hello, World!"
      className="class-tw"
      colorClassName="pinkColor"
      style={{ fontSize: "24px", fontWeight: "bold" }}
    >
      <p>Hover over me with style</p>
    </Xplosion>
  );
};

export default App;
```

<!-- ## Codesandbox -->

<!-- [Link](https://codesandbox.io/p/devbox/react-hacker-effect-yw5ykh) -->

## License

This project is licensed under the MIT License - see the LICENSE file for
details.
