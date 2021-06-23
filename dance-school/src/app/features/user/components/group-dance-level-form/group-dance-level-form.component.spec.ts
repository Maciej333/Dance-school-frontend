import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDanceLevelFormComponent } from './group-dance-level-form.component';

describe('GroupDanceLevelFormComponent', () => {
  let component: GroupDanceLevelFormComponent;
  let fixture: ComponentFixture<GroupDanceLevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDanceLevelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDanceLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
