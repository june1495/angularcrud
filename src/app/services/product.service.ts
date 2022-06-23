import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient, private auth: AuthService) {}
  addProduct(product: any) {
    return this.http.post<any>(`${this.API_URL}/products`, product, {
      headers: { user: this.auth.getSession().id },
    });
  }
  getProduct(): Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}/products/${this.auth.getSession().id}`,
      {
        headers: { user: this.auth.getSession().id },
      }
    );
  }
  editProduct(product: any) {
    return this.http.put<any>(
      `${this.API_URL}/products/${this.auth.getSession().id}`,
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
      headers: { id: id, userId: `${this.auth.getSession().id}` },
    });
  }
  createPdf(pro: any) {
    return this.http.post<any>(`${this.API_URL}/pdf`, pro, {
      headers: { user: this.auth.getSession().id },
    });
  }
}
