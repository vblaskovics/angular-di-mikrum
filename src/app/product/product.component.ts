import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  path:string = '';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.path = this.productService.getUrl();
  }

}
