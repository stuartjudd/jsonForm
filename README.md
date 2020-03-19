TEST 2

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Details

Purpose:
We want you to create a React component that can render different forms, e.g. sign up, mailing list registration, feedback form. Given the proposed variety to support, we want to create a single component that can be easily adapted.

Details:
Create a React component that can accept a JSON-based form definition via a prop and produce a form that, in this case, can be used to collect a person’s details. The form should include the following fields:

name
    text based
    should enforce the need for a first and last name (separated by a space)
date of birth
    date based
    required, should be older than 18
gender
    options based (male/female)
    optional
contact number
    text based
    optional
    allow for multiple values (e.g. mobile, home, etc)
require guardian consent
    checkbox
    optional
guardian details (name, contact)
    text based
    required/applicable if consent checkbox is ticked

