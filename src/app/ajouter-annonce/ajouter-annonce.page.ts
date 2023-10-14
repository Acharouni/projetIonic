import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.page.html',
  styleUrls: ['./ajouter-annonce.page.scss'],
})
export class AjouterAnnoncePage{

  userEmail: string="";
  userName: string="";
  isUserLoggedIn = false;
  constructor(private auth: Auth, private firestore: Firestore,private router: Router, private menu: MenuController, private navCtrl: NavController) {
  this.loadUserData();
  this.iSconnect();
  }
  iSconnect(){
    this.auth.beforeAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }
  
  loadUserData() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // Utilisateur connecté
        this.userName =  user.displayName || '';
        this.userEmail = user.email || '';
      } else {
        // L'utilisateur n'est pas connecté
        this.userName = 'Non connecté';
        this.userEmail = 'Non connecté';
      }
    });
  }
  navigateToHome() {
    this.navCtrl.navigateForward('/home');
  }
  navigateToAjoute() {
    this.navCtrl.navigateForward('/ajouter-annonce');
  }
  navigateToMAnnonce() {
    this.navCtrl.navigateForward('/mes-annonce');
  }
  deconnexion() {
    this.auth.signOut().then(()=>{this.router.navigate(['/login'])})
    return console.log('singout réussie');
  }
}
