import { Component, OnInit } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  nom: string = "";
  prenom: string = "";
  email: string = "";
  motDePasse: string = "";
  confirmationMotDePasse: string = "";
  

  constructor(private router: Router, private auth: Auth, private firestore: Firestore) { }

  ngOnInit() {
  }


  async signup() {
    
    const users = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.motDePasse
    );
    const saveusers= await {
      firstName :this.prenom ,
      lastName  :   this.nom
    }
    const ref = doc(this.firestore, `users/${users.user.uid}`);
    setDoc(ref, { saveusers });
    
    this.router.navigate(['/login']);
    return users;
  }

  
}


