# shopping react app

![wiref.png](wiref.png)

Create a shopping app for walmart products.

There should be 3 main components:

1. A search component
  - search for a product and display the results
  - clicking on a product causes the product window to display/be filled
  
2. Product display component
  - displays information about the product
  - has a button to add to cart
  
3. Cart component
  - displays everything that was added to the cart
  - calculates subtotal, GST and shipping (flat $7)
  
#### further
Add a sorting function to the search page. (just sort the results you currently have)

#### further
When the add to cart button is clicked again, add another item to the cart.

#### further
Let the user take things back out of the cart

#### further
Make each item in the cart a link. When the user clicks an item it opens in the product display tab.

#### further
Change the layout of the app to have only 2 columns. Add CSS to make the cart `position:absolute`. When something is added to the cart, make the cart display. Add a button inside the cart to hide it.


### Express Server Proxy
You are provided with an API proxy route to use. Look at what it does here: https://github.com/wdi-sg/shopping-react/blob/master/src/server/controllers/query.js

You must fill in an API key.

You can register for one here: https://developer.walmartlabs.com/member/register
(you don't need a real website to register)

## Technologies

- React (v16) + Redux (v3) + React Router (v4)
- Express.js (v4) as production and development server
- Webpack 4 (production and development configurations)
- SCSS support (+ sanitize.css included)
- ES2015+

## Features
- preconfigured router
- React Material UI example theme
- preconfigured modal windows
- preconfigured eslint and Prettier code formatter
- React Hot Loader
- Linux/MacOS/Windows

## Usage

### Make sure you have nodemon installed globally
```
npm install -g nodemon
```

### Installation
```bash
git clone git@github.com:antonfisher/react-express-webpack.git
cd react-express-webpack
npm install


# remove boilerplate git references
rm ./.git
```

### Scripts
```bash
# run development mode
npm run dev

# run production mode
npm run build
npm start

# run prettier
npm run prettier

# run lint
npm run lint

# run on a different port
HTTP_PORT=3001 npm run dev
```

## License
MIT License. Free use and change.
