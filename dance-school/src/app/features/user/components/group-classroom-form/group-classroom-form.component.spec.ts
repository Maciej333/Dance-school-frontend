import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupClassroomFormComponent } from './group-classroom-form.component';

describe('GroupClassroomFormComponent', () => {
  let component: GroupClassroomFormComponent;
  let fixture: ComponentFixture<GroupClassroomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupClassroomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupClassroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
