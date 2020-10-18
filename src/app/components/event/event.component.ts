import {Component, OnInit} from '@angular/core';
import {IconService} from '../../shared/icon.service';
import {IEvent} from '../../shared/models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  title = 'Create event';
  eventFormData: IEvent;
  isJoinBtnEnable: boolean;

  constructor(private iconService: IconService) {
  }

  onFillEventForm($event) {
    this.eventFormData = $event;
  }

  onEnableJoinBtn($event) {
    this.isJoinBtnEnable = $event;
  }

  ngOnInit() {
    this.iconService.registerIcons();
  }
}
