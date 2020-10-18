import {Component, OnInit} from '@angular/core';
import {IEvent} from './shared/models/event';
import {IconService} from './shared/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private iconService: IconService) {
  }

  ngOnInit() {
    this.iconService.registerIcons();
  }
}
