import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserRole } from 'src/app/core/enums/user-role.enum';
import { Group } from 'src/app/core/models/group';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit, OnDestroy {

  @Input('type') type: string;
  @Input('group') group: Group;

  message: string = '';
  userRoleStudent: UserRole = UserRole.STUDENT;
  user: User;
  userSubscription: Subscription;
  userRole: UserRole;
  userRoleSubscription: Subscription;

  constructor(private groupService: GroupService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.userRoleSubscription = this.authService.userRoleSubject$.subscribe(role => {
      this.userRole = role;
    })
    this.userSubscription = this.authService.userSubject$.subscribe(user => {
      this.user = user;
    })
  }

  handelShowGroup(){
    this.groupService.setGroupId(this.group.id);
    this.router.navigate(['/user', 'group', this.group.id]);
  }

  registerStudent(){
    this.groupService.getStudentGroup(this.user.id).subscribe(groups => {
      if(groups.filter(group => group.id === this.group.id).length > 0){
         this.message = "You are already subscribed to the group";
      }else{
        this.groupService.registerStudent(this.group.id, this.user.id).subscribe(message => {
          this.message = message.message;
        })
      }
    })
  }

  emptyMessage(){
    this.message = "";
  }

  ngOnDestroy(): void {
    this.userRoleSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
