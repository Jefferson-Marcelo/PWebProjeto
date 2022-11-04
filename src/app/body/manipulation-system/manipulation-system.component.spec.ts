import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulationSystemComponent } from './manipulation-system.component';

describe('ManipulationSystemComponent', () => {
  let component: ManipulationSystemComponent;
  let fixture: ComponentFixture<ManipulationSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulationSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
