import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DanceLevel } from 'src/app/core/enums/dance-level.enum';
import { convertEnumToArray } from 'src/app/core/functions/convertEnumToArray';
import { DanceStyle, danceStyles } from 'src/app/core/models/dance-style';
import { Group } from 'src/app/core/models/group';
import { AuthService } from 'src/app/core/services/auth.service';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnChanges {

  @HostListener('window:resize')
  onResize() {
    if(window.screen.width > 950){
      this.showForm = true;
    }else{
      this.showForm = false;
    }
  }

  showSpinner: boolean = false;
  showLoadError: boolean = false;

  showForm: boolean = false;
  filterForm: FormGroup;
  danceStyleArray: DanceStyle[] = danceStyles;
  danceLevelArray: string[];

  @Input() groupsType: string;
  groups: Group[];
  filterGroups: Group[];

  constructor(private fb: FormBuilder, private groupService: GroupService, private authService: AuthService) { }

  ngOnInit(): void {
    if(window.screen.width > 950){
      this.showForm = true;
    }else{
      this.showForm = false;
    }
    this.danceLevelArray = convertEnumToArray(DanceLevel);

    this.filterForm = this.fb.group({
      name: [
        ""
      ],
      danceStyle: [
        'all'
      ],
      danceLevel: [
        'all'
      ]
    })

    this.showSpinner = true;
    switch(this.groupsType) {
      case('Open'):
        this.groupService.getOpenGroups().subscribe(groups => {
          this.groups = groups;
          this.filterGroups = groups;
          this.showSpinner = false;
        },
        error => {
          this.showLoadError = true;
        })
        break;
      case('Instructor'):
        const instructorId: number = this.authService.user.id;
        this.groupService.getInstructorGroup(instructorId).subscribe(groups => {
          this.groups = groups;
          this.filterGroups = groups;
          this.showSpinner = false;
        },
        error => {
          this.showLoadError = true;
        })
        break;
      case('Student'):
        const studentId: number = this.authService.user.id;
        this.groupService.getStudentGroup(studentId).subscribe(groups => {
          this.groups = groups;
          this.filterGroups = groups;
          this.showSpinner = false;
        },
        error => {
          this.showLoadError = true;
        })
        break;
      default:
        this.groups = [];
    }
  }

  get name() {
    return this.filterForm.get('name');
  }

  get danceStyle() {
    return this.filterForm.get('danceStyle');
  }

  get danceLevel() {
    return this.filterForm.get('danceLevel');
  }

  handleFilterFormSubmit(event: Event){
    event.preventDefault();

    this.filterGroups = this.groups
      .filter(group => {
        if(this.name.value !== "" && this.name.value !== null){
          if(group.name.toLocaleLowerCase().includes(this.name.value.toLocaleLowerCase())){
            return group;
          }
        }else {
          return group;
        }
      })
      .filter(group => {
        if(this.danceStyle.value !== "all" && this.danceStyle.value !== null){
          if(group.danceStyleName === this.danceStyle.value){
            return group;
          }
        }else {
          return group;
        }
      })
      .filter(group => {
        if(this.danceLevel.value != "all" && this.danceLevel.value != null){
          if(group.danceLevel as DanceLevel == this.danceLevel.value as DanceLevel){
            return group;
          }
        }else {
          return group;
        }
      })
  }

  resetForm(){
    this.filterForm.reset();
  }

  toggleForm(){
    this.showForm = !this.showForm;

  }

  ngOnChanges(): void {
    if( this.groupsType == 'Instructor'){
      const instructorId: number = this.authService.user.id;
      this.groupService.getInstructorGroup(instructorId).subscribe(groups => {
        this.groups = groups;
        this.filterGroups = groups;
        this.showSpinner = false;
      },
      error => {
        this.showLoadError = true;
      })
    }
  }

}
