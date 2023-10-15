import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../models/annonce.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mes-annonce',
  templateUrl: './mes-annonce.page.html',
  styleUrls: ['./mes-annonce.page.scss'],
})
export class MesAnnoncePage implements OnInit  {
  users: any[] | undefined;
  
  annoncesAll : any[] = [];
  annonce!:Annonce
  constructor(private navCtrl: NavController, private auth: Auth, private annServ:AnnonceService,private router: Router) {}
  ngOnInit(): void {
    let UserCh= this.auth.currentUser?.uid
    if(UserCh != null)
    this.annServ. getallAnon().subscribe({
  next:(data)=>{
    for(let us in data){
      
      this.annServ.getAnon(us).subscribe({
        next:(res)=>{
          if(res.userId === UserCh){
this.annonce=res
this.annonce.identifiant=us
           this.annoncesAll.push(this.annonce)
          }
        }
      })
      // this.annServ.getallAnon(us).subscribe({
      //   next:(data)=>{
      //     this.appus=data
      //     console.log(this.appus.Uid)
      //     if(user.uid === this.appus.Uid){
      //       this.userName =  this.appus?.firstName
      //     }
      //   }
      // })
     
      
  }}})
  }
  deletAnnonce(idUs : string){
    this.annServ.deletAnnonce(idUs).subscribe({
      next:(data)=>{
        console.log(idUs)
        this.annoncesAll=[]
        this.ngOnInit()
        
      }
    })
    }

}