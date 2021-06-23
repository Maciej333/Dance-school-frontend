import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenGroupComponent } from './pages/open-group/open-group.component';


const routes: Routes = [{ path: '', component: OpenGroupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
