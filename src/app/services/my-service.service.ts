import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private myClient : HttpClient ) {}
  private BaseUrl="http://localhost:3000/users";
  getAllUsers(){
   return this.myClient.get(this.BaseUrl);
  }
  GetUserByID(id:any){
    // return this.myClient.get(this.Base_URL+"/"+id);
    return this.myClient.get(`${this.BaseUrl}/${id}`);
  }
  AddUser(newUser:any){
    return this.myClient.post(this.BaseUrl,newUser);
  }
  DeleteUser(id:any)
  {
    const  url=`${this.BaseUrl}/${id}`
    return this.myClient.delete(url)
  }
  UpdateUser(id: any, updatedUser: any) {
    const url = `${this.BaseUrl}/${id}`;
    return this.myClient.put(url, updatedUser);
  }



}
