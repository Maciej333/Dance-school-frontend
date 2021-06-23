import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DanceLevel } from 'src/app/core/enums/dance-level.enum';
import { GroupStatus } from 'src/app/core/enums/group-status.enum';
import { Group } from 'src/app/core/models/group';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit, OnDestroy{

  group: Group = new Group(1,new Date, [], GroupStatus.OPEN, DanceLevel.P0, "","", "", []);
  groupSubscription: Subscription;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupSubscription = this.groupService.groupSubject.subscribe(group => this.group = group);

  }

  ngOnDestroy(): void {
    this.groupSubscription.unsubscribe();
  }

}
