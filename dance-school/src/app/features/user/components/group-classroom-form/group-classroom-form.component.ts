import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/core/models/room';
import { ClassroomService } from 'src/app/core/services/classroom.service';

@Component({
  selector: 'app-group-classroom-form',
  templateUrl: './group-classroom-form.component.html',
  styleUrls: ['./group-classroom-form.component.scss']
})
export class GroupClassroomFormComponent implements OnInit {


  @Input('groupId') groupId: number;

  rooms: Observable<Room[]>;
  classroomForm: FormGroup;

  message: string = "";

  constructor(private fb: FormBuilder, private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.rooms = this.classroomService.getRooms();
    this.classroomForm = this.fb.group({
      room: [
        null,
          {
            validators: [
              Validators.required
            ]
          }
        ],
      date: [
        null,
          {
            validators: [
              Validators.required
            ]
          }
        ],
      start: [
        null,
          {
            validators: [
              Validators.required
            ]
          }
        ],
      duration:[
        null,
          {
            validators: [
              Validators.required,
              Validators.min(1)
            ]
          }
        ],
    },
    {
      asyncValidator: this.RoomAvailability.bind(this)
    }
    )
  }

  get room() {
    return this.classroomForm.get('room');
  }

  get date() {
    return this.classroomForm.get('date');
  }

  get start() {
    return this.classroomForm.get('start');
  }

  get duration() {
    return this.classroomForm.get('duration');
  }

  handleClassroomFormSubmit(event: Event){
    event.preventDefault();

    this.classroomService.createClassroom(this.date.value, this.start.value, this.duration.value, this.groupId, this.room.value).subscribe(message => {
      this.message = message.message;
    })
  }



  RoomAvailability(control: AbstractControl): Promise< ValidationErrors | null> | Observable< ValidationErrors | null > {
    const date: Date =  control.value.date;
    const startTime: Date = control.value.start;
    const duration: number = control.value.duration;
    const roomId: number = control.value.room;

    return this.classroomService.checkRoomAvailability(date, startTime, duration, roomId).pipe(
      map(res => {
        if(res.message == "FREE"){
          return null;
        }else{
          return {occupy: true};
        }
      })
    )
  }

}
