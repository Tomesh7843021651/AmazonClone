import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {
  whatToShow:number=0;
  changeWhatToShow(num:number){
    this.whatToShow=num;
  }
  constructor(public http:HttpClient, public app:AppComponent){}
  logout(){
    this.app.whatToShow=0

  }
  


}
