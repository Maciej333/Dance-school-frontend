import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRole } from '../enums/user-role.enum';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userRole: UserRole;
  public userRoleSubject$: BehaviorSubject<UserRole> = new BehaviorSubject(null);
  public user: User;
  public userSubject$: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private userService: UserService) { }

  public loginUser(user: User): void{
    window.clearTimeout();
    this.user = user;
    this.userSubject$.next(user);
    if(user?.instructor){
      this.setUserRole(UserRole.INSTRUCTOR);
    }else if(user?.student){
      this.setUserRole(UserRole.STUDENT);
    }else {
      this.setUserRole(null);
    }

    if(user == null){
      setTimeout( this.emptyLocalStorage, 0);
    }else{
      localStorage.setItem("session", JSON.stringify(user) );
      setTimeout(this.emptyLocalStorage, 600000);
    }
  }

  public setUserRole(userRole: UserRole){
    this.userRole = userRole;
    this.userRoleSubject$.next(userRole);
  }

  emptyLocalStorage(){
    this.user = null;
    localStorage.removeItem("session");
    window.location.replace("http://localhost:4200/group");
  }
}
