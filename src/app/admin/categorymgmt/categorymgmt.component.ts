import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorymgmt',
  templateUrl: './categorymgmt.component.html',
  styleUrls: ['./categorymgmt.component.css']
})
export class CategorymgmtComponent {

  list:any='';
  name:string='';
  addedBy:string='';
  constructor(public http:HttpClient, public app:AppComponent){
    //api call to get all existing categories
    let url = app.baseUrl+'admin/getAllCategories'

    http.get(url).subscribe((data:any)=>{
      if(data == null){
       window.alert('Something is wrong ')
      }
      else{
        this.list=data;
        
      }
    });
  }


addCategory(){
  let url = this.app.baseUrl+"admin/addNewCategory"+this.app.id;
  this.http.post(url, this.name).subscribe((data:any)=>{
    if(data == null){
      window.alert('Something is wrong')
    }
    else{
      this.list.push(data);
      this.name='';
    }
  });
}


logout(){
  this.app.whatToShow=0

}

}
