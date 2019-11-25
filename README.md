# shopping react app
![https://media.giphy.com/media/3ov9jSVZW5EkTUnzeE/giphy.gif](https://media.giphy.com/media/3ov9jSVZW5EkTUnzeE/giphy.gif)

![wiref.png](wiref.png)

Create a shopping app for products.

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
  
Add bootstrap to your app if you like.

#### How to Start: Rails
A product has a name, a price and a description and an image url. Look in the `seeds.rb` file for a reference.

Create a migration, model, route and controller for products. For now you only need one route, which shows a list of all products. `Product.all`

There is a (non-working) seed file that will fill your products table after you have a model.

#### How to Start: React
You should begin your app with one single working component- begin with the search component on the left. Use AJAX to make a query to this route and then use react to display the results.

When you have a working component that displays the search results, you can begin on the second component. Refactor your code to store the list of results in the parent of the search component. Then use the search result the user selected to populate the second component.

You can then move on to the 3rd component to display the items the user has added to their cart from the 2nd component.

#### further
Add a carousel component to your app to display all the product images. Perhaps slick carousel npm library: https://github.com/akiran/react-slick
  
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

#### further
Paginate your search results.

#### further
Add more of the search result attributes into the product page.

#### further
Adjust the shipping cost according to the item added to the cart.

