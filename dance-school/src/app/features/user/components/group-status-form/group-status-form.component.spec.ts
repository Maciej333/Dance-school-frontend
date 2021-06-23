import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStatusFormComponent } from './group-status-form.component';

describe('GroupStatusFormComponent', () => {
  let component: GroupStatusFormComponent;
  let fixture: ComponentFixture<GroupStatusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupStatusFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
