import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  list:any;
constructor(public Http:HttpClient, public app:AppComponent){
  let url = app.baseUrl+"buyer/history/"+app.id;

  Http.get(url).subscribe((data:any)=>{
    if(data==null){
      window.alert("something is wrong")
    }
    else{
      this.list=data;
      console.log(this.list)
    }

  })

}
whatToShow:number =0;
prodid!:number;
stars:number=5;
addRating(pid:number){
  console.log(pid)
  this.whatToShow =1;
  this.prodid=pid;
  console.log(this.prodid)

}
updateRating(){
  this.whatToShow=0;
  let array: number[] = [];
  array[0]=this.app.id;
  array[1]=this.prodid;
  array[2]=this.stars;

  let url=this.app.baseUrl+"buyer/addRating";

  this.Http.post(url,array).subscribe((data:any)=>{
    if (data==null) {
      window.alert("Something is Wrong")
    }else{
      
      if (data==1) {
        window.alert("rating updated successfull")
      } else {
        window.alert("something is wrong")
      }
    }
  })
}
// updateRating(){}


logout(){
  this.app.whatToShow=0

}

}
