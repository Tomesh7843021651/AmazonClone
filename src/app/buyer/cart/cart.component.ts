import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  list:any;
  constructor(public Http:HttpClient,  public app:AppComponent){
    let url = this.app.baseUrl+"buyer/getCart/"+this.app.id;
    Http.get(url).subscribe((data:any)=>{
      if(data == null){
        window.alert("Something is wrong")
      }
      else{
        this.list= data;
        for(let i =0 ; i<this.list.length ;i++){
          this.list[i].quant=1;
          this.list[i].amount= this.quant*this.list[i].price*((100-this.list[i].discount)/100);
          this.total = this.total + this.list.amount;
        }
        console.log(this.list)
      }
    })
  }
  quant:number = 1;
  total:number=1;

  cartassign(l:number , val:any){
    let num : number = Number(val);
    console.log(num);
    console.log(this.list[l].quantity)
    for(let i =0; i<this.list.length;i++){
      if(i==l){
        if(num<= this.list[i].quantity){
          this.list[i].quant=num;
          this.list[i].amount = this.list[i].quant*this.list[i].price*((100-this.list[i].discount)/100);
        }
        else{
          window.alert("quantity is more than available")
        }
      }
    }
    this.total = 0;
    for(let i = 0 ; i<this.list.length;i++){
      this.total=this.total + this.list[i].amount;
    }

  }

  buyPod(){
    let url = this.app.baseUrl+"buyer/placeOrder/"+this.app.id;

    let array2D : number[][] = [];
    for(let i=0 ; i<this.list.length ; i++){
      let item = this.list[i];
      let cartid = this.list[i].id;  // Assuming 'id' is the property name
      let quantity = this.list[i].quant;   // Assuming 'quantity' is the property name
      array2D.push([cartid, quantity]);

    }
    this.Http.post(url,array2D).subscribe((data:any)=>{
      if(data == null){
        window.alert("something went wrong")
      }
      else{
        if(data == 1){
          window.alert("product purchased")
          this.list=[];
        }
        else{
          window.alert("could not place order")
        }

      }

    })
  }
  

  logout(){
    this.app.whatToShow=0

  }

}
