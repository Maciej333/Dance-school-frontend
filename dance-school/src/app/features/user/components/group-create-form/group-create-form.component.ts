import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DanceLevel } from 'src/app/core/enums/dance-level.enum';
import { Gender } from 'src/app/core/enums/gender.enum';
import { convertEnumToArray } from 'src/app/core/functions/convertEnumToArray';
import { DanceStyle, danceStyles } from 'src/app/core/models/dance-style';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { GroupService } from 'src/app/core/services/group.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-group-create-form',
  templateUrl: './group-create-form.component.html',
  styleUrls: ['./group-create-form.component.scss']
})
export class GroupCreateFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private groupService: GroupService, private userService: UserService, private authService: AuthService) { }

  newGroup: FormGroup;

  user: User;
  genderArray: Gender[];
  instructorArray: User[];
  danceStyleArray: DanceStyle[] = danceStyles;
  danceLevelArray: string[];
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.user = this.authService.user;
    this.genderArray = convertEnumToArray(Gender);
    this.danceLevelArray = convertEnumToArray(DanceLevel);
    this.userService.getInstructors().subscribe(instructors => {
      this.instructorArray = instructors.filter(i => i.id !== this.user.id);
    })

    this.newGroup = this.fb.group({
      groupType: [
        '',
        {
          validators: [
            Validators.required
          ]
        }
      ],
      gender: [
        null,
        {
          validators: [
            Validators.required
          ]
        }
      ],
      danceStyle: [
        null,
        {
          validators: [
            Validators.required
          ]
        }
      ],
      danceLevel: [
        null,
        {
          validators: [
            Validators.required
          ]
        }
      ],
      instructors: [
        null,
      ],
      name: [
        ""
      ],
    },
    {
      validators: this.requreName.bind(this)
    }
    )
  }

  get groupType() {
    return this.newGroup.get('groupType');
  }
  get gender() {
    return this.newGroup.get('gender');
  }
  get danceStyle() {
    return this.newGroup.get('danceStyle');
  }
  get danceLevel() {
    return this.newGroup.get('danceLevel');
  }
  get instructors() {
    return this.newGroup.get('instructors');
  }
  get name() {
    return this.newGroup.get('name');
  }

  handleFormSubmit(event: Event){
    event.preventDefault();
    let instructors: number[] = [];
    if(this.instructors?.value){
      instructors = this.instructors.value;
    }
    instructors.push(this.user.id);

    this.groupService.createGroup(this.gender.value, instructors, this.groupType.value, this.danceLevel.value, this.danceStyle.value, this.name.value).subscribe(message => {
      window.alert(message.message);
    })
    this.newGroup.reset();
    this.close.emit(false);
  }


  requreName(form: FormGroup): ValidationErrors | null {
      const groupType: string = form.get('groupType').value;
      if (groupType === 'HOREO') {
        const name: string = form.get('name').value;
          return name != "" ? null : {nameRequired: true};
      }
      return null;
  }

}
