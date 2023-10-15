import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { UsersService } from './services/users.service';
import { AppUser } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: 'home', icon: 'home' },
    { title: 'Ajouter Annonce', url: 'ajouter-annonce', icon: 'add' },
    { title: 'Mes Annones', url: 'mes-annonce', icon: 'list' },
  ];
  userEmail: string="";
  userName: string="";
  selectedPageTitle: string="";
  isUserLoggedIn = false;
  usersAll=[];
  appus!:AppUser
  
  constructor(private auth: Auth, private firestore: Firestore,private router: Router, private menu: MenuController,
     private navCtrl: NavController,private usSer: UsersService) {
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
        console.log("connecté")
        this.usSer.getUsers().subscribe({
          next:(data)=>{
            console.log(data)
            for(let us in data){
              this.usSer.getUser(us).subscribe({
                next:(data)=>{
                  this.appus=data
                  console.log(this.appus.Uid)
                  if(user.uid === this.appus.Uid){
                    this.userName =  this.appus?.firstName
                  }
                }
              })
             
            }
          }
        })
        this.userEmail = user.email || '';
        
      } else {
        // L'utilisateur n'est pas connecté
        this.userName = 'Non connecté';
        this.userEmail = 'Non connecté';
      }
    });
  }
  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }
  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  deconnexion() {
    this.auth.signOut().then(()=>{this.router.navigate(['/home'])})
    this.menu.enable(false);
    return console.log('singout réussie');
  }
}