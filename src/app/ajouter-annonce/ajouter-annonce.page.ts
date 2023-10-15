import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnnonceService } from '../services/annonce.service';
import { Auth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.page.html',
  styleUrls: ['./ajouter-annonce.page.scss'],
})
export class AjouterAnnoncePage implements OnInit {
  formAnnonce! : FormGroup;
  constructor(private navCtrl: NavController,private fb :FormBuilder, private AnnService: AnnonceService,private auth: Auth) { }
  
  ngOnInit() {
    this.formAnnonce = this.fb.group({
      categorie: this.fb.control(""),
      description: this.fb.control(""),
    image: this.fb.control(""),
    title: this.fb.control(""),
    prix:this.fb.control(0),
    userId: this.fb.control(this.auth.currentUser?.uid),
    })
    
  }
  saveAnnonce(){
    let annonce = this.formAnnonce.value
    this.AnnService.addAnnonce(annonce).subscribe({
      next:(response)=>{
        console.log("annonce ajouté")
        this.goToMAnnPage()
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  async goToMAnnPage() {
    this.navCtrl.navigateForward('/mes-annonce');
  }

}
