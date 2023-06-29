const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  // Use forEach to console.log each product name to the console.
  products.forEach(product => {
    console.log(product.product);
  });
  
  // Use filter to filter out products that have a name longer than 5 characters
  const filteredProducts = products.filter(product => product.product.length <= 5);
  console.log(filteredProducts);
  
  // Using both filter and map. Convert all prices that are strings to numbers,
  // and remove all products from the array that do not have prices.
  // After this has been done then use reduce to calculate the combined price of all remaining products.
  const combinedPrice = products
    .filter(product => typeof product.price === 'string' && product.price !== '')
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0);
  console.log(combinedPrice);
  
  // Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.
  const concatenatedNames = products.reduce((str, product, index) => {
    if (index === 0) {
      return product.product;
    }
    return `${str}, ${product.product}`;
  }, '');
  console.log(concatenatedNames);
  
  // Use reduce to calculate both the highest and lowest-priced items.
  // The names should be returned as the following string: Highest: coffee. Lowest: banana.
  const { highest, lowest } = products.reduce((result, product) => {
    if (product.price !== '' && !isNaN(product.price)) {
      const price = Number(product.price);
      if (price > result.highest.price) {
        result.highest = { name: product.product, price };
      }
      if (price < result.lowest.price) {
        result.lowest = { name: product.product, price };
      }
    }
    return result;
  }, { highest: { name: '', price: Number.NEGATIVE_INFINITY }, lowest: { name: '', price: Number.POSITIVE_INFINITY } });
  
  console.log(`Highest: ${highest.name}. Lowest: ${lowest.name}.`);
  
  // Using only Object.entries and reduce, recreate the object with the exact same values.
  // However, the following object keys should be changed in the new array:
  // product should be changed to name
  // price should be changed to cost
  const recreatedProducts = Object.entries(products).reduce((newProducts, [key, value]) => {
    const { product, price, ...rest } = value;
    newProducts[key] = { name: product, cost: price, ...rest };
    return newProducts;
  }, {});
  
  console.log(recreatedProducts);
  