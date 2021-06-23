import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupClassroomsComponent } from './group-classrooms.component';

describe('GroupClassroomsComponent', () => {
  let component: GroupClassroomsComponent;
  let fixture: ComponentFixture<GroupClassroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupClassroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
