import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsertaskComponent } from './create-usertask.component';

describe('CreateUsertaskComponent', () => {
  let component: CreateUsertaskComponent;
  let fixture: ComponentFixture<CreateUsertaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsertaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUsertaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
