import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormulaireAuteurComponent} from './formulaire-auteur.component';

describe('FormulaireAuteurComponent', () => {
  let component: FormulaireAuteurComponent;
  let fixture: ComponentFixture<FormulaireAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireAuteurComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
