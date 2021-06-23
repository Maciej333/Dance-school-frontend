import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupCardComponent } from './components/groups/group-card/group-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GroupsComponent,
    GroupCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GroupsComponent,
    GroupCardComponent
  ]
})
export class SharedModule { }
