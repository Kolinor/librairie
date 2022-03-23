import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormulaireLivreComponent} from './formulaire-livre.component';

describe('FormulaireLivreComponent', () => {
  let component: FormulaireLivreComponent;
  let fixture: ComponentFixture<FormulaireLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireLivreComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
