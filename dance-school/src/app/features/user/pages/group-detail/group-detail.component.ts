import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserRole } from 'src/app/core/enums/user-role.enum';
import { Group } from 'src/app/core/models/group';
import { AuthService } from 'src/app/core/services/auth.service';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit, OnDestroy {

  whatToShow: string;

  userRole: UserRole;
  userRoleSubscription: Subscription;
  group: Group = null;
  groupSubscription: Subscription;

  constructor(private groupService: GroupService, private authService: AuthService) { }

  ngOnInit(): void {
    this.groupSubscription = this.groupService.groupSubject.subscribe(group => this.group = group);
    this.userRoleSubscription = this.authService.userRoleSubject$.subscribe(role => {
      this.userRole = role;
    })
  }

  showElement(elementToShow: string){
    this.whatToShow = elementToShow;
  }

  ngOnDestroy(): void {
    this.groupSubscription.unsubscribe();
    this.userRoleSubscription.unsubscribe();
  }

}
