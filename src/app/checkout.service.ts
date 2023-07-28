import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  items: Product[] = [];
  checkoutApi: string = 'http://localhost:3000/api/echeckout';

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;

  }
 
 addCheckout(data: any){
  console.log("abc")
    return this.http.post(this.checkoutApi + '/add', data);
  }
  
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}