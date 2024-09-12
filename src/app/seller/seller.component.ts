import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  constructor(public http:HttpClient, public app:AppComponent){}
  whatToShow:number=0;
  changeWhatToShow(num:number){
    this.whatToShow=num;}


    logout(){
      this.app.whatToShow=0
  
    }

}
