import { Component, OnInit } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword
} from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage{
 
  email: string = '';
  password: string = '';



  constructor(private navCtrl: NavController,private router: Router, private auth: Auth,private route: ActivatedRoute) { }

  ngOnInit() {
   this.goToHomePage;
   this.login;
  
  }

  async login() {
    if (this.email && this.password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          this.auth,
          this.email,
          this.password
        );
        console.log("curent user gff :"+this.auth.currentUser?.uid);
        console.log('Authentification réussie', userCredential);
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Erreur d\'authentification', error);
      }
    } else {
      console.error('Veuillez remplir tous les champs.');
    }
  }
  async goToHomePage() {
    this.navCtrl.navigateForward('/home');
  }

}
