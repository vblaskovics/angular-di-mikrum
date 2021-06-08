import { MockPriceService } from '../services/price-service.service.mock';
import { Product } from './product';

describe('Product', () => {

  let product:Product;

  beforeEach(() => {
    const service = new MockPriceService();
    product = new Product(service, 200);
  })

  describe('price', () => {
    it('is calculated based on the basePrice and the state', () => {
      expect(product.totalPrice('FL')).toBe(300);
    });
  });


});
