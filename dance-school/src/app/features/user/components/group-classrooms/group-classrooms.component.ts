import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from 'src/app/core/models/classroom';
import { ClassroomService } from 'src/app/core/services/classroom.service';

@Component({
  selector: 'app-group-classrooms',
  templateUrl: './group-classrooms.component.html',
  styleUrls: ['./group-classrooms.component.scss']
})
export class GroupClassroomsComponent implements OnInit {

  @Input('groupId') groupId: number;

  classrooms: Observable<Classroom[]>

  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.classrooms = this.classroomService.getGroupClassrooms(this.groupId);
  }

}
