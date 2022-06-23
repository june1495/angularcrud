import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdftemplate',
  templateUrl: './pdftemplate.component.html',
  styleUrls: ['./pdftemplate.component.css'],
})
export class PdftemplateComponent implements OnInit {
  productArr: any[] = [];
  @Input() product!: any;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.productArr);

    this.productArr.push(this.product);
    console.log(this.productArr);
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.productArr.push(changes['product']);
  //   console.log(this.productArr);
  // }
  // addprod(prod: any) {
  //   this.product.push(prod);
  // }
}
