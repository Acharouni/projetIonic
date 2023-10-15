import { Component, OnInit } from '@angular/core';
import  { UsersService }  from 'src/app/services/users.service'
import {
  Auth,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AppUser } from '../models/user.model';

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
  usID:any;

  constructor(private router: Router, private auth: Auth, private firestore: Firestore, private userSer: UsersService) { }

  ngOnInit() {
  }


  async signup() {
    
    const users = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.motDePasse
      
    );
    this.usID= users.user;
    const saveusers:AppUser= {
      firstName: this.prenom,
      lastName: this.nom,
      Uid:this.usID?.uid
    }
    const ref = doc(this.firestore, `users/${users.user.uid}`);
    setDoc(ref, { saveusers });
    this.userSer.addUser(saveusers).subscribe({
      next:(res)=>{console.log(res)},
  error : (err)=>{console.log(err); }
      
    });
    this.router.navigate(['/login']);
    return users;
  }

  
}


