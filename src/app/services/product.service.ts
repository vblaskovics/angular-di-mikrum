import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private pathUrl:string) {}

  getUrl():string {
    return this.pathUrl;
  }
}
