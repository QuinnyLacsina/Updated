import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  //checkoutApi: string = 'http://localhost:3000/checkout';
  checkoutApi: string = 'http://localhost:3000';
  checkout:any;
  checkoutItems: any[] = [];

  constructor(private http: HttpClient){}
  getcheckout() {
    this.http.get(`${this.checkoutApi}/api/echeckout`)
    .subscribe((resultData: any)=>{
      this.checkoutItems = resultData;
    })
    console.log("this.checkoutItems: " +this.checkoutItems)
  }
  //cFirstname:any;
  //cLastname:any;
  //cEmail:any;
  //cAddress:any;

  ngOnInit(): void {
    this.http.get(this.checkoutApi).subscribe ((res) =>{
      this.checkout = res;
      console.log(this.checkout);
    })
  }

  /*addCheckout(){
    let newCheckout = {
      "firstname": this.cFirstname,
      "lastmame": this.cLastname,
      "email": this.cEmail,
      "address": this.cAddress,
    }
    this.http.post(this.checkoutApi, newCheckout).subscribe ((res) =>{
      console.log(res);
      alert('new checkout added');
    })
  }*/

}
