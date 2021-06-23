import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserRole } from 'src/app/core/enums/user-role.enum';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy {

  showCreateForm: boolean = false;

  userRole: UserRole;
  userRoleSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userRoleSubscription = this.authService.userRoleSubject$.subscribe(role => {
      this.userRole = role;
    })
  }

  showCreateGroupForm(): void {
    this.showCreateForm = !this.showCreateForm;
  }

  ngOnDestroy(): void {
    this.userRoleSubscription.unsubscribe();
  }

}
