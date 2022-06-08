import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productArr: Product[] = [];
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      ubication: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  addProduct() {
    this.productArr.push(this.productForm.value);
    console.log(this.productArr);
    this.productForm.reset();
    this.router.navigate(['/']);
  }
}
