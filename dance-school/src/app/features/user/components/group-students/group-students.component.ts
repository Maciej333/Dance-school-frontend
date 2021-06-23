import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/core/models/group';
import { User } from 'src/app/core/models/user';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-group-students',
  templateUrl: './group-students.component.html',
  styleUrls: ['./group-students.component.scss']
})
export class GroupStudentsComponent implements OnInit {

  @Input('group') group: Group;

  students: Observable<User[]>

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.students = this.groupService.getGroupStudents(this.group.id);
  }

  getUserDanceLevel(user: User, danceStyleName: string): string {
    let danceLevel = "";
    user.userDanceStyles.forEach(uds => {
      if(uds.danceStyleName == danceStyleName){
        danceLevel =  uds.danceLevel.toString();
      }
    })
    return danceLevel;
  }

}
