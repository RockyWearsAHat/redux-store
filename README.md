# Redux Store

[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.2.3-7f1ed4?style=for-the-badge&labelColor=ebd4ff&logo=redux&logoColor=7f1ed4)](https://redux.js.org/)
[![Redux](https://img.shields.io/badge/React_Redux-9.1.1-16c5f5?style=for-the-badge&labelColor=1e2121&logo=redux&logoColor=16c5f5)](https://redux.js.org/)

[![MongoDB](https://img.shields.io/badge/MongoDB_/_Mongoose-8.0.0-05b531?style=for-the-badge&labelColor=b5f5c5&logo=mongodb&logoColor=05b531)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.17.2-fff?style=for-the-badge&labelColor=1e2121&logo=express&logoColor=fff)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18.2.0-16c5f5?style=for-the-badge&labelColor=1e2121&logo=react&logoColor=16c5f5)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22.0.0-05b531?style=for-the-badge&labelColor=b5f5c5&logo=node.js&logoColor=05b531)](https://nodejs.org/)

# [Live On Render](https://redux-store-ykfn.onrender.com/)

## Table of Contents

- [Example Images](#images-of-application-running)
- [About This Project](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Images Of Application Running

### Main Page

![Image of the homepage](./examples/Main.png?raw=true "Homepage")

### Filtered Items

![Image of items being filtered by category](./examples/Filter.png?raw=true "Items Being Filtered By Category")

### Cart Can Store All Items and/or Quantities

![Image of the cart popup](./examples/Cart.png?raw=true "Cart With Multiple Items and Quantities")

### Checkout Page With Stripe

![Image of the checkout page](./examples/Checkout.png?raw=true "A Working Checkout Page With Stripe")

## Description

This is a storefront using Redux for state management. The application itself is pretty simple and doesn't process any payments or anything like that, but all of the state is managed via redux and hooks in redux. All of the source code for the reducers and functions can be found in `client/src/redux`, and many of the components and pages that originally used the context have been modified (actually all of them have been to my knowledge). There is no more dispatches using the React Native Context API, only dispatches with Redux calls.

## Installation

1. Clone the repository `git clone https://github.com/RockyWearsAHat/redux-store.git`
2. `cd` into the downloaded folder, `ls` it should contain a package.json, and a client and a server folder
3. Run `code .`
4. Open a terminal and install dependencies using `npm install`
5. Run the server by running `npm run develop`

OPTIONAL
<br>Build the project by running `npm run build`
<br>Start the built version with `npm start`

## Usage

1. Start the development server using `npm run develop`.
2. To see the site, CTRL + click the link in your terminal, or in your browser and navigate to `http://localhost:3000`.

OR<br>[See the live version here](https://redux-store-ykfn.onrender.com/)

## Features

This repository is a simple demonstration and experimentation with redux. It is a state management library meaning that while most of the code remains unchanged, it is overall simpler to update state in a more predictable manner. To try the application run the development server or click [here for the live version](https://redux-store-ykfn.onrender.com/), all of the changes to the code were done in `client/src/redux` and the individual pages in client, eg. `App.jsx`, `ProductList/index.jsx`, `CartItem/index.jsx`, etc. Not in the pages folder for the most part, mostly just in the components to render the pages.

## License

[![LICENSE](https://img.shields.io/badge/Licensed_Under_the-MIT_License-364a69?style=for-the-badge&labelColor=253145)](LICENSE.md)
