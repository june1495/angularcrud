import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  productArr: any = [];
  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.productservice.getProduct().subscribe((res) => {
      this.productArr = res.products;
      console.log(this.productArr);
    });
  }
  updateRender() {
    this.productservice.getProduct().subscribe((res) => {
      this.productArr = res.products;
    });
  }
  deleteProduct(id: string) {
    this.productservice.deleteProduct(id).subscribe((res) => console.log(res));
    this.updateRender();
  }
}
