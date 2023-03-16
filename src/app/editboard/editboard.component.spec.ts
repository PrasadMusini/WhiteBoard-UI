import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditboardComponent } from './editboard.component';

describe('EditboardComponent', () => {
  let component: EditboardComponent;
  let fixture: ComponentFixture<EditboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
