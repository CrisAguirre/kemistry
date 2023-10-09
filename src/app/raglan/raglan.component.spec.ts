import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaglanComponent } from './raglan.component';

describe('RaglanComponent', () => {
  let component: RaglanComponent;
  let fixture: ComponentFixture<RaglanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaglanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaglanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
