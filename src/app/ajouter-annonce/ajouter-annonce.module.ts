import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterAnnoncePageRoutingModule } from './ajouter-annonce-routing.module';
import { AjouterAnnoncePage } from './ajouter-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    IonicModule,

    AjouterAnnoncePageRoutingModule
  ],
  declarations: [AjouterAnnoncePage]
})
export class AjouterAnnoncePageModule {}
