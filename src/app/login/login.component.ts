import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public http:HttpClient, public app:AppComponent){}

  username:string='';
  password:string='';

  login(){
    let url = this.app.baseUrl+'login/log'
    let obj = [this.username,this.password];
    console.log(obj);
    this.http.post(url,obj).subscribe((data:any)=>{
      console.log(data);
      if(data == null){
        window.alert('Something  is wrong');
      }
      else{
        if(data.id<1){
          window.alert(data.errorMessage)
        }
        else{
        this.app.id =data.id;
        this.app.whatToShow=data.accountType;}
      }
    });
  }
  register(){
    this.app.whatToShow=1;
  }


}
