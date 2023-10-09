import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemistryComponent } from './kemistry.component';

describe('KemistryComponent', () => {
  let component: KemistryComponent;
  let fixture: ComponentFixture<KemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KemistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
