import { Component, OnInit } from '@angular/core';
import { instructors } from 'src/app/core/utilities/instructor-list';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  inctructors: {firstName: string, lastName: string, img: string}[];

  constructor() { }

  ngOnInit(): void {
    this.inctructors = instructors;
  }

}
