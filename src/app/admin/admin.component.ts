import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  whatToShow:number=0;
  changeWhatToShow(num:number){
    this.whatToShow=num;
  }

  name:string='';
  constructor(public http:HttpClient, public app:AppComponent){

    let url = app.baseUrl+'login/getName'+app.id;
    http.get(url).subscribe((data:any)=>{
      if(data == null){
        window.alert('Something is wrong')
      }else{
        this.name=data[0];
      }
    });
  }
  logout(){
    this.app.whatToShow=0

  }

}
