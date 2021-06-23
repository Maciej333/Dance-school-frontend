import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) { }

  public getGroupClassrooms(groupId: number): Observable<Classroom[]>{
    return this.http.get<Classroom[]>(`http://localhost:8080/group/classroom?groupId=${groupId}`);
  }


  public getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(`http://localhost:8080/rooms/all`);
  }

  public checkRoomAvailability(date: Date, startTime: Date, duration: number, roomId: number):  Observable<{message: string}> {
      return this.http.post<{message: string}>(
        `http://localhost:8080/rooms/check`,
        {
          date: date,
          startTime: startTime,
          duration: duration,
          roomId: roomId
        }
      )
  }

  public createClassroom(date: Date, startTime: Date, duration: number, groupId: number, roomId: number): Observable<{message: string}>{
    return this.http.post<{message: string}>(
      `http://localhost:8080/group/classroom?groupId=${groupId}`,
        {
          date: date,
          startTime: startTime,
          duration: duration,
          roomId: roomId
        }
      );
  }
}
