// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// This is a print out of all the items in the data
console.log(data.items)

// Next, it's recommended to just look at the first item
console.log(data.items[0])

// YOUR CODE BELOW
// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?


console.log('\nProblem 1:\n')
var count = 0;
for ( i = 0; i < data.items.length; i++) {
    if (data.items[i].kind = "shopping#product") {
        count = count + 1;
    }
}
console.log(count)

// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.

console.log('\nProblem 2:\n')
for (i = 0; i < data.items.length; i++) {
    
    if (data.items[i].product.inventories[0].availability === "backorder") {
        console.log(data.items[i].product.title);
    }
}

// 3.) Print the `title` all items with more than one image link.

console.log('\nProblem 3:\n')
for (i = 0; i < data.items.length; i++) {
    if (data.items[i].product.images.length > 1) {
        console.log(data.items[i].product.title);
    }
}


// 4.) Print all "Canon" products in the items
// HINT: careful with case sensitivity!

console.log('\nProblem 4:\n')
for (i = 0; i < data.items.length; i++) {
    if (data.items[i].product.brand = "Canon") {
        console.log(data.items[i].product);
    }
}

// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What is the type of author?

console.log('\nProblem 5:\n')
for (i = 0; i < data.items.length; i++) {
    if (data.items[i].product.author.name == "eBay" && data.items[i].product.brand == "Canon") {
         console.log(data.items[i]);
    }
}

// 6.) Print all the products with their **brand**, **price**,
// and an **image link**
// HINT: You can just use the first (0th) element in the images
// and inventories arrays.

console.log('\nProblem 6:\n')
for (i = 0; i < data.items.length; i++) {
   console.log(data.items[i].product.brand, data.items[i].product.inventories[0].price, data.items[i].product.images[0].link);
}

