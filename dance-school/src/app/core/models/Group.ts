import { DanceLevel } from "../enums/dance-level.enum";
import { Gender } from "../enums/gender.enum";
import { GroupStatus } from "../enums/group-status.enum";
import { User } from "./user";

export class Group {

  constructor(public id: number, public createDate: Date, public gender: Gender[], public status: GroupStatus, public danceLevel: DanceLevel, public danceStyleName: string, public name: string, public groupType: string, public instructors: User[]){
    this.id = id;
    this.createDate = createDate;
    this.gender = gender;
    this.status = status;
    this.danceLevel = danceLevel;
    this.danceStyleName = danceStyleName;
    this.name = name;
    this.groupType = groupType;
    this.instructors = instructors;
  }
}
