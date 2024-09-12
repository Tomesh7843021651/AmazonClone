
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(public http:HttpClient,public app:AppComponent){}
  name!:string;
  // email!:string;
  username!:string;
  password!:string;
  accounttype!:number;

  register(){
    let url=this.app.baseUrl+"login/register"
    let user={
      accountType:this.accounttype,
      name:this.name,
      username:this.username,
      password:this.password
    }
    console.log(url)
    this.http.post(url,user).subscribe((data:any)=>{
      console.log(data)
      if (data==null) {
        window.alert('Something is wrong');
      }
       if(data==1){
        window.alert("enter username");
      }
      if(data==2){
         window.alert("Enter password");
      }
       if(data==4){
        window.alert("successfully registerd")
        this.app.whatToShow=0

      }
       if(data==3){
        window.alert("username already exist try new one")
      }
    })
  }
  logout(){
    this.app.whatToShow=0

  }

}
