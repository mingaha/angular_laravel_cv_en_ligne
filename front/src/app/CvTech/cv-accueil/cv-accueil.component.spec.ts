import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAccueilComponent } from './cv-accueil.component';

describe('CvAccueilComponent', () => {
  let component: CvAccueilComponent;
  let fixture: ComponentFixture<CvAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
