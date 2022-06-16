import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  // productArr: Product[] = [];
  titulo: string = 'Add Product';
  productForm: FormGroup;
  id: string | null;
  constructor(
    private fb: FormBuilder,
    private productservice: ProductService,
    private router: Router,
    private arouter: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      ubication: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.id = this.arouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  addProduct() {
    // this.productArr.push(this.productForm.value);
    // console.log(this.productArr);
    // this.productForm.reset();
    // this.router.navigate(['/']);
    if (this.id !== null) {
      this.productservice
        .updateProduct(this.id, this.productForm.value)
        .subscribe((_res) => {
          this.router.navigate(['/product']);
        });
    } else {
      this.productservice.addProduct(this.productForm.value).subscribe(
        (res) => {
          if (res) {
            this.productForm.reset();
            this.router.navigate(['/product']);
          }
        },
        (err) => console.log(err)
      );
    }
  }
  esEditar() {
    if (this.id !== null) {
      console.log(this.id);
      this.titulo = 'edit product';
      this.productservice.getProductById(this.id).subscribe((data) => {
        this.productForm.setValue({
          product: data.product,
          category: data.category,
          ubication: data.ubication,
          price: data.price,
        });
      });
    }
  }
  // getProduct(){
  //   this.productservice.
  // }
}
