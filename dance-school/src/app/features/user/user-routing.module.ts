import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: "user", pathMatch: "full" },
  { path: 'user', component: UserComponent },
  { path: 'groups', component: GroupsComponent, pathMatch: "full" },
  { path: 'group/:id', component: GroupDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
