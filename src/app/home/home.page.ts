import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AnnonceService } from '../services/annonce.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  users: any[] | undefined;

  annoncesAll : any[] = [];
  annoncesMaisons:any[] = [];
  isUserLoggedIn = false;
  constructor(private auth: Auth, private firestore: Firestore,private router: Router, private menu: MenuController, private navCtrl: NavController, private annServ:AnnonceService) {

  this.iSconnect();
  }
  ngOnInit(): void {
    
    let UserCh= this.auth.currentUser?.uid
   
    this.annServ.getallAnon().subscribe({
  next:(data)=>{
    for(let us in data){
      
      this.annServ.getAnon(us).subscribe({
        next:(res)=>{
          console.log(res)
           if(res.categorie === "Voitures"){
            this.annoncesAll.push(res)
           }else{
            this.annoncesMaisons.push(res)
           }
          
        }
      })
  }}})
  }
  iSconnect(){
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }
  showVoitureContent = true;
  showMaisonContent = false;

  showVoiture() {
    this.showVoitureContent = true;
    this.showMaisonContent = false;
  }

  showMaison() {
    this.showMaisonContent = true;
    this.showVoitureContent = false;
  }

}
