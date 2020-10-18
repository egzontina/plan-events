import {Component, Input, OnInit} from '@angular/core';
import {IEvent} from '../../../shared/models/event';
import * as L from 'leaflet';

@Component({
  selector: 'app-preview-event',
  templateUrl: './preview-event.component.html',
  styleUrls: ['./preview-event.component.css']
})
export class PreviewEventComponent implements OnInit {

  defaultImg = '../assets/placeholder-img.png';
  map: any;
  @Input() data: IEvent;
  @Input() isJoinBtnEnabled = false;
  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  public checkPath(src) {
    return src && src !== '' ? src : this.defaultImg;
  }

  isStartEndDate() {
    if (this.data && this.data.startDateTime && this.data.startDateTime) {
      const start = new Date(this.data.startDateTime);
      const end = new Date(this.data.endDateTime);
      start.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);
      return start.toDateString() === end.toDateString();
    }
  }

  initMap(){
    this.map = L.map('map').setView([51.673858, 7.815982], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(this.map);
  }
}
