import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUser } from '../models/user.model';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  addUser(user:AppUser): Observable<any>{
    return this.http.post("https://fir-ionic-bbe55-default-rtdb.firebaseio.com/users.json",user)
  }
  getUsers(){
    return this.http.get("https://fir-ionic-bbe55-default-rtdb.firebaseio.com/users.json")

    }
    getUser(idDocum: string) {
      return this.http.get<AppUser>(`https://fir-ionic-bbe55-default-rtdb.firebaseio.com/users/${idDocum}.json`);
    }
  
}
