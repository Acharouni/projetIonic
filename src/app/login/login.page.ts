import { Component, OnInit } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword
} from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';


  constructor(private router: Router, private auth: Auth) { }

  ngOnInit() {}

  async login() {
    if (this.email && this.password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          this.auth,
          this.email,
          this.password
        );
        console.log('Authentification réussie', userCredential);
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Erreur d\'authentification', error);
      }
    } else {
      console.error('Veuillez remplir tous les champs.');
    }
  }

}
