import { DanceLevel } from "../enums/dance-level.enum";

export class UserDanceStyle {

  constructor(public danceStyleName: string, public danceLevel: DanceLevel){
    this.danceStyleName = danceStyleName;
    this.danceLevel = danceLevel;
  }
}
