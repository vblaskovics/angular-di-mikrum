import { Product } from './product';

describe('Product', () => {

  let product:Product;

  beforeEach(() => {
    product = new Product(200);
  })

  describe('price', () => {
    it('is calculated based on the basePrice and the state', () => {
      expect(product.totalPrice('FL')).toBe(225);
    });
  });

  
});
