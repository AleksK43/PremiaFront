import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsiteComponent } from './staticsite.component';

describe('StaticsiteComponent', () => {
  let component: StaticsiteComponent;
  let fixture: ComponentFixture<StaticsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
