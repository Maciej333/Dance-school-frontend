import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DanceLevel } from '../enums/dance-level.enum';
import { Gender } from '../enums/gender.enum';
import { GroupStatus } from '../enums/group-status.enum';
import { Group } from '../models/group';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupId: number = 0;
  groupSubject: BehaviorSubject<Group> = new BehaviorSubject(new Group(-1,new Date, [], GroupStatus.OPEN, DanceLevel.P0, "","", "", []));

  constructor(private http: HttpClient) { }


  public getOpenGroups(): Observable<Group[]>{
    return this.http.get<Group[]>(`http://localhost:8080/group/groups/open`);
  }

  public getInstructorGroup(instructorId: number): Observable<Group[]>{
    return this.http.get<Group[]>(`http://localhost:8080/group/instructorgroups?instructorId=${instructorId}`);
  }

  public getStudentGroup(studentId: number): Observable<Group[]>{
    return this.http.get<Group[]>(`http://localhost:8080/group/studentgroups?studentId=${studentId}`);
  }

  public getGroupById(): void{
    this.http.get<Group>(`http://localhost:8080/group/group?groupId=${this.groupId}`)
      .subscribe(group => {
        this.groupSubject.next(group);
      })
  }

  public setGroupId(groupId: number){
    this.groupId = groupId;
    this.getGroupById();
  }


  public updateGroupStatus(groupId: number, status: GroupStatus): Observable<{message: string}>{
    return this.http.put<{message: string}>(
        `http://localhost:8080/group/status?groupId=${groupId}`,
        {
          groupStatus: status
        }
      );
  }


  public updateGroupDanceLevel(groupId: number, level: DanceLevel, updateStudentsLevel: boolean): Observable<{message: string}>{
    return this.http.put<{message: string}>(
      `http://localhost:8080/group/level?groupId=${groupId}`,
        {
          danceLevel: level,
          updateStudentsLevel: updateStudentsLevel
        }
      );
  }

  public getGroupStudents(groupId: number): Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:8080/group/student?groupId=${groupId}`);
  }

  public registerStudent(groupId: number, userId: number): Observable<{message: string}>{
    return this.http.post<{message: string}>(
        `http://localhost:8080/group/register?groupId=${groupId}&studentId=${userId}`,{

        }
      );
  }

  public createGroup(gender: Gender[], instructors: number[], groupType: string, danceLevel: DanceLevel, danceStyleName: string, name: string ): Observable<{message: string}>{
    return this.http.post<{message: string}>(
      "http://localhost:8080/group/create",
      {
        gender: gender,
        instructors: instructors.map(i => {return {id: i}}),
        groupType: groupType,
        danceLevel: danceLevel,
        danceStyleName: danceStyleName,
        name: name
      }
    );
  }



}
