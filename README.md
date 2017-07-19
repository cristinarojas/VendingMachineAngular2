# Vending Machine Cristina Rojas

## Installation

* Clone the repository:

```
 git clone git@github.com:steveblue/christina-interview-test.git
```

* Install the NPM dependencies with yarn.

```
yarn install
```

NOTE: If your node version is older than 6.9 then use:

```
yarn install --ignore-engines
```

## Requirements

* Angular CLI (`npm install -g angular-cli`)
* Node.js 6.11+ (https://nodejs.org)
* node-sass (`npm install --save node-sass`)
* http-server (`npm install http-server -g`)
* Yarn (`npm install -g yarn`)

## Run the project in production mode

* Install `http-server` globally `npm install http-server -g`
* Compile the code using the command `yarn build`
* Run `http-server dist`
* Open http://localhost:8080 to test the application.

## Run the project in development mode

Run `yarn start`

### Commands

- `yarn start` Starts server in development mode
- `yarn build` Builds the application into `/dist` folder
- `http-server dist` Runs the application into a local server

### Troubleshooting

If you have some issues with the localStorage object, just clear the localStorage using the follow command into your browser console:

`localStorage.clear()`

### Vending Machine

Design and write JavaScript code for a vending machine interaction scenario. You may use any MV* framework (or impress us with your Vanilla JS skills), however AngularJS or Angular is preferred.

### Requirements

- The vending machine stores items in slots - snacks and drinks.
- The vendor can add items to the vending machine.
- The items have a price and a quantity.
- The vending machine allows customers to insert a dollar amount and pick a number to select an item in the vending machine.
- The vending machine dispenses the purchased item and returns change at the end of the transaction.
- When the program starts, the vendor will load some items into the vending machine. Items are loaded in a sequence. The vending machine has 20 slots, with 10 of each item per slot. Once the loading is completed, the customer can buy some items.

### UI Requirements

- The app should display the items currently in stock
- Each slot of the vending machine can hold 10 items
- A specific item can be displayed in multiple slots, with a maximum of 10 in each slot
- No slot should carry more than 1 type of item
- Each slot should be numbered
- The user should be able to enter a dollar amount
- The user should be able choose an item by number
- The app should display change if necessary
- The app should notify users when an item is out of stock
- The user should be able to make multiple transactions, one after the other

NOTE: Please submit your solution so that the root folder has an index.html that can be viewed with a simple server.

### Extra credit

Provide unit tests for the code you write.
