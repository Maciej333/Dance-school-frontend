export class Classroom {

  public date: Date;
  public startTime: Date;
  public endTime: Date;
  public duration: number;
  public roomId: number;

  constructor(date: Date, start: string, end: string, duration: number, roomId: number){
    this.date = date;
    this.duration = duration;
    this.startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number.parseInt(start.split(":")[0]), Number.parseInt(start.split(":")[1]));
    this.roomId = roomId;
    this.endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number.parseInt(end.split(":")[0]), (Number.parseInt(end.split(":")[1])));
  }

}
