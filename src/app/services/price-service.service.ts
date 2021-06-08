import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() {    
  }

  calculateTotalPrice(basePrice: number, state: string) {
    // simulate state tax value service call
    const tax = Math.random();
    return basePrice * (1 + tax);
  }

}
