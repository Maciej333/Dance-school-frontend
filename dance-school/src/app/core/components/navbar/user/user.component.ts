import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/core/enums/user-role.enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  user: User;
  userRoleSubscription: Subscription;
  userRole: UserRole;
  canChangeRole: boolean = false;

  showManegement: boolean = false;
  showLoginForm: boolean = false;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.userSubscription = this.authService.userSubject$.subscribe(user => {
      this.user = user;
      if(user?.student && user?.instructor){
        this.canChangeRole = true;
      }
    });
    this.userRoleSubscription = this.authService.userRoleSubject$.subscribe(userRole => {
      this.userRole = userRole;
    })
    this.showLoginForm = false;
    this.showManegement = false;
  }

  toggleShowManegement() {
    this.showManegement = !this.showManegement;
  }

  goToUser(){
    this.router.navigate(['/user']);
  }

  switchToOtherRole() {
    if(this.userRole === UserRole.STUDENT){
      this.authService.setUserRole(UserRole.INSTRUCTOR);
    } else if(this.userRole === UserRole.INSTRUCTOR) {
      this.authService.setUserRole(UserRole.STUDENT);
    }
    this.router.navigate(['/user']);
  }

  logout(){
    this.authService.loginUser(null);
    this.router.navigate(['/group']);
    this.showLoginForm = false;
    this.showManegement = false;
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.userRoleSubscription.unsubscribe();
  }

}
