import { IPriceService } from "../services/price-service.interface";
import { PriceService } from "../services/price-service.service";

export class Product {
    service: PriceService;
    basePrice: number;

    constructor(service: IPriceService, basePrice: number){
        this.basePrice = basePrice;
        this.service = service;
    }

    totalPrice(state: string){
        return this.service.calculateTotalPrice(this.basePrice, state);
    }
}
