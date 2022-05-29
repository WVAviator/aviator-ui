# AviatorUI

Note: This library is in development and unfinished.

AviatorUI is a headless React component library developed with further customization in mind. The goal is to have the full functionality of a feature-rich, accessible component working behind scenes with a modest look and feel, with the further visual customization of each component being simple, intuitive, and optional (but encouraged). Through the use of the CSS-in-JS library Emotion, many aspects of the components' appearances will be customizable through theming with React context and through custom props. The default look and feel is inspired by MaterialUI.

If you have ever installed a UI library and placed a component, say a button, and thought to yourself something like, "I wish the borders weren't so rounded." So you set out to apply your own styles but you find that applying the styles through the className prop doesn't work as expected, and the actual solution isn't always intuitive. In libraries like MaterialUI, for example, you'll find that you must set the style through the sx prop to override the default styles. The goal of this library is for you to simply include your own custom CSS to the className prop, just as you would for any basic HTML element, and have everything _just work_. With this in mind, using something like TailwindCSS with this library would be possible - as any TailwindCSS classes will simply override the default styling of each component (or you can leave the default styles if you want and they won't clash with TailwindCSS).

This project makes heavy use of the following technologies:
- TSDX
- Typescript
- React
- Storybook
- Emotion

To get started, first install the library:
```
npm install aviator-ui
```
or, if you're using Yarn:
```
yarn add aviator-ui
```
and from there you can start using AviatorUI components in your project. Currently, only the following components are available:

- Button
- Checkbox
- RadioButton
- MenuIcon
- Spinner

More components will be added as development continues.

If you would like to customize the theme, you can wrap your application in the `ThemeProvider` element and give it a `theme` prop. If you prefer not to define every single property of the theme object, you can use the `createTheme` function with a partial theme as an argument, and it will be merged with the default theme.

