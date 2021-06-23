import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceStylesComponent } from './dance-styles.component';

describe('DanceStylesComponent', () => {
  let component: DanceStylesComponent;
  let fixture: ComponentFixture<DanceStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanceStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
