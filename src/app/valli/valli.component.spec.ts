import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValliComponent } from './valli.component';

describe('ValliComponent', () => {
  let component: ValliComponent;
  let fixture: ComponentFixture<ValliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
