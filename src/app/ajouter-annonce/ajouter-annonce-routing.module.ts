import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterAnnoncePage } from './ajouter-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterAnnoncePageRoutingModule {}
