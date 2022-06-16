import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'http://localhost:3000/api/v1';
  token = JSON.parse(localStorage.getItem('jwt') as any);
  constructor(private http: HttpClient) {}
  addProduct(product: any) {
    console.log(this.token);
    return this.http.post<any>(`${this.API_URL}/products`, product, {
      headers: { user: this.token.id },
    });
  }
  getProduct() {
    return this.http.get<any>(`${this.API_URL}/products/${this.token?.id}`, {
      headers: new HttpHeaders({ user: `${this.token.id}` }),
    });
  }
  editProduct(product: any) {
    return this.http.put<any>(
      `${this.API_URL}/products/${this.token.id}`,
      product
    );
  }
  getProductById(id: string) {
    return this.http.get<any>(`${this.API_URL}/product/${id}`);
  }
  updateProduct(id: string, product: any) {
    return this.http.put<any>(`${this.API_URL}/product/${id}`, product);
  }
  deleteProduct(id: string) {
    return this.http.delete<any>(`${this.API_URL}/product/${id}`, {
      headers: { id: id, userId: `${this.token.id}` },
    });
  }
  createPdf(pro: any) {
    return this.http.post<any>(`${this.API_URL}/pdf`, pro, {
      headers: { user: this.token.id },
    });
  }
}
