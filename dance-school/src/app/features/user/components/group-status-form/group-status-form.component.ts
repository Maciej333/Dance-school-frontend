import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { convertEnumToArray } from 'src/app/core/functions/convertEnumToArray';
import { GroupService } from 'src/app/core/services/group.service';
import { GroupStatus } from '../../../../core/enums/group-status.enum';

@Component({
  selector: 'app-group-status-form',
  templateUrl: './group-status-form.component.html',
  styleUrls: ['./group-status-form.component.scss']
})
export class GroupStatusFormComponent implements OnInit {

  @Input('groupId') groupId: number;

  statusForm: FormGroup;
  statusArray: string[];

  message: string = "";

  constructor(private fb: FormBuilder, private groupService: GroupService) { }

  ngOnInit(): void {
    this.statusForm = this.fb.group({
      status: [
        null,
        {
          validators: [
            Validators.required,
          ]
        }
      ]
    });

    this.statusArray = convertEnumToArray(GroupStatus);
  }

  get status(){
    return this.statusForm.get('status');
  }


  handleStatusForm(evet: Event){
    event.preventDefault();
    this.groupService.updateGroupStatus(this.groupId, this.status.value).subscribe(message => {
      this.message = message.message;
      this.groupService.getGroupById();
    })
  }

}
