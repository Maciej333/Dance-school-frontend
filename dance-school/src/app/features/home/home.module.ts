import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { DanceStylesComponent } from './components/dance-styles/dance-styles.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { HomeComponent } from './pages/home/home.component';
import { DanceStyleComponent } from './components/dance-styles/dance-style/dance-style.component';
import { InstructorComponent } from './components/instructors/instructor/instructor.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    DanceStylesComponent,
    InstructorsComponent,
    DanceStyleComponent,
    InstructorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
