import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterAnnoncePage } from './ajouter-annonce.page';

describe('AjouterAnnoncePage', () => {
  let component: AjouterAnnoncePage;
  let fixture: ComponentFixture<AjouterAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
