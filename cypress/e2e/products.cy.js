
import ProductsPage from '../pages/ProductsPage';

describe('Product Browsing & Filtering', () => {
  const productsPage = new ProductsPage();

  it('Filters products, selects first, and verifies product details', () => {
    
    // Step 1: Navigate to the Products page
    productsPage.visit();

    // Step 2: Filter products by Category → Women > Dress
    productsPage.filterByCategory('Women', 'Dress');

    // Step 3: Verify that the filtered products contain the expected keyword
    productsPage.verifyFilteredProducts('Dress');

    // Step 4: Select the first product from the filtered list
    productsPage.selectFirstProduct();

    // Step 5: Verify product details (name, price, availability)
    productsPage.verifyProductDetails({
      name: 'Sleeveless Dress',
      price: 'Rs. 1000',
      availability: 'In Stock'
    });

  });
});
