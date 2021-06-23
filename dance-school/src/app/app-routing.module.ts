import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) , canLoad: [AuthGuard]},
  { path: 'group', loadChildren: () => import('./features/group/group.module').then(m => m.GroupModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
