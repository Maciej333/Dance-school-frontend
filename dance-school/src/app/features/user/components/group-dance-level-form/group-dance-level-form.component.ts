import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanceLevel } from 'src/app/core/enums/dance-level.enum';
import { convertEnumToArray } from 'src/app/core/functions/convertEnumToArray';
import { Group } from 'src/app/core/models/group';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-group-dance-level-form',
  templateUrl: './group-dance-level-form.component.html',
  styleUrls: ['./group-dance-level-form.component.scss']
})
export class GroupDanceLevelFormComponent implements OnInit {


  @Input('group') group: Group;

  danceLevelForm: FormGroup;
  danceLevelArray: string[];

  massage: string = "";

  constructor(private fb: FormBuilder, private groupService: GroupService) { }

  ngOnInit(): void {
    this.danceLevelArray = convertEnumToArray(DanceLevel);

    this.danceLevelForm = this.fb.group({
      danceLevel: [
        null,
        {
          validators: [
            Validators.required,
          ]
        }
      ],
      updateStudentsLevel: [
        false
      ]
    });
  }



  get danceLevel() {
    return this.danceLevelForm.get('danceLevel');
  }

  get updateStudentsLevel() {
    return this.danceLevelForm.get('updateStudentsLevel');
  }



  handleDanceLevelForm(event: Event){
    event.preventDefault();

    this.groupService.updateGroupDanceLevel(this.group.id, this.danceLevel.value, this.updateStudentsLevel.value)
    .subscribe(massage => {
      this.massage = massage.message;
      this.groupService.getGroupById();
    });
  }

}
