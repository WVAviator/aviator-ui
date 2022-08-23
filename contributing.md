# Contributing to Aviator UI

If you're interested in helping build this UI library, I would love your help with any of the following:

- Making the existing components more robust, performant, or aesthetically pleasing
- Adding new components
- Reporting any bugs or issues
- Adding additionaly functionality (related to theming or otherwise)

Please read and reference the instructions and guidelines below.

## Instructions

1. Please start by opening an Issue her on the repo with your suggestion.
2. Fork the repo. Make sure to fork the _development_ branch, not the main branch.
3. Create a new branch titled {your name}-{the component you're working on}
4. Clone the repo to your local environment
5. Run `yarn`
6. Make your changes or build out your new components
7. Commit your code
8. Create a pull request to the development branch

## Guidelines

In regards to building a new component (or editing an existing component):

- Please make sure to follow existing conventions for file naming, best practices, and project structure.
- If you want to quickly scaffold out all the boilerplate file structure for a new component, use `yarn scaffold MyComponent` where MyComponent is the name of the new component you are building. This will create the directory structure and even add the component export to the components index file.
- Please follow any ARIA/WCAG accessibility standards for your component.
- Please write some basic unit tests for your component (consider including some to check for accessibility specifically).
- Consider how a developer using the library might add className props to your component and direct those incoming className props to the correct elements as appropriate.
- Don't be afraid to ask questions, and have fun!



