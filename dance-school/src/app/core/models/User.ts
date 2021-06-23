import { Gender } from "../enums/gender.enum";
import { UserDanceStyle } from "./user-dance-style";

export class User {

  constructor(public id: number, public firstName: string, public lastName: string, public gender: Gender, public contacts: string[], public userDanceStyles: UserDanceStyle[], public student: boolean, public instructor: boolean){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.contacts = contacts;
    this.userDanceStyles = userDanceStyles;
    this.student = student;
    this.instructor = instructor;
  }

}
