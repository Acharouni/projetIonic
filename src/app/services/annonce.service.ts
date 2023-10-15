import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }
  addAnnonce(annonce:Annonce){
    return this.http.post("https://fir-ionic-bbe55-default-rtdb.firebaseio.com/annonces.json",annonce)
  }
  getallAnon(){
    return this.http.get("https://fir-ionic-bbe55-default-rtdb.firebaseio.com/annonces.json")

    }
    getAnon(idDocum: string) {
      return this.http.get<Annonce>(`https://fir-ionic-bbe55-default-rtdb.firebaseio.com/annonces/${idDocum}.json`);
    }
    deletAnnonce(idDocum: string){
      return this.http.delete(`https://fir-ionic-bbe55-default-rtdb.firebaseio.com/annonces/${idDocum}.json`)
    }
}
