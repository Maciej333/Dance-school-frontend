import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { GroupClassroomFormComponent } from './components/group-classroom-form/group-classroom-form.component';
import { GroupClassroomsComponent } from './components/group-classrooms/group-classrooms.component';
import { GroupDanceLevelFormComponent } from './components/group-dance-level-form/group-dance-level-form.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { GroupStatusFormComponent } from './components/group-status-form/group-status-form.component';
import { GroupStudentsComponent } from './components/group-students/group-students.component';
import { UserComponent } from './pages/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupInfoComponent } from './components/group-info/group-info.component';
import { SharedModule } from '../shared/shared.module';
import { GroupCreateFormComponent } from './components/group-create-form/group-create-form.component';


@NgModule({
  declarations: [
    UserComponent,
    GroupsComponent,
    GroupDetailComponent,
    GroupClassroomFormComponent,
    GroupClassroomsComponent,
    GroupDanceLevelFormComponent,
    UserNavComponent,
    GroupStatusFormComponent,
    GroupStudentsComponent,
    GroupInfoComponent,
    GroupCreateFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
