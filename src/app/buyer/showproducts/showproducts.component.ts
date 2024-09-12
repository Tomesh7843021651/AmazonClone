import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent {
  whatToShow:number=0;
  cats:any;
  catid:number= 0;
  minprice:number=0;
  maxprice:number=50000;
  minrating:number=0;
  constructor(public http:HttpClient, public app:AppComponent){
    let url2=app.baseUrl+'admin/getAllCategories'
    this.http.get(url2).subscribe((data:any)=>{
      if(data == null){
        window.alert('Something is wrong')
      }
      else{
        this.cats=data;
      }
    });


  }

  
  prods:any
  obj:any


  loadproducts(){
    // console.log(this.categoryid+" , "+this.minprice+" , "+this.maxprice+" , "+this.minrating);
    let obj= [this.catid, this.minprice , this.maxprice ,this.minrating];
    console.log("Array to send backend :: " +obj);
    let url = this.app.baseUrl + 'buyer/getProductsByFilter';
    this.http.post(url, obj).subscribe((data:any)=>{
      console.log("Backend response :: ",data);
      if(data == null){
        window.alert('Something is wrong');

      }else if(data.length ==0){
        window.alert('No product Available');
      }else {
        this.prods = data;
        console.log(this.prods);
      }
    });
  }

  addToCart(cart:any){
    let url = this.app.baseUrl+'buyer/addToCart'+this.app.id+'and'+ cart.id;
    this.http.get(url).subscribe((data:any)=>{
      if(data == null || data ==0){
        window.alert("something is wrong");
      }
      else{
         if(data ==1){
          window.alert("done")
         }
         else{
          window.alert("something is wrong");
         }
      }

    });
  }

  prodid!:number;
  stars:number=0;
  addRating(){
    // console.log(pid);
    this.whatToShow=1;
    
    console.log(this.prodid);
  }

  updateRatingToServer(p:any,pid:number){
    this.whatToShow=0;
    this.prodid = pid;
    let array: number[] =[];
    array[0] = this.app.id;
    array[1] = pid;
    array[2] = this.stars;
    console.log(array[1])
    let url = this.app.baseUrl+"buyer/addRating";
    this.http.post(url,array).subscribe((data:any)=>{
      if(data == null){
        window.alert(" something is wrong");
      }
      else{
        if(data >=0 ){
          window.alert("rating updated successful");
        }
        else{
          window.alert("something is wrong");
        }
      }
    })

    console.log("u reached");
    

   
  }
  logout(){
    this.app.whatToShow=0

  }


 


}
