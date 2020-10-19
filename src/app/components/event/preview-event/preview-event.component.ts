import {Component, Input, OnInit} from '@angular/core';
import {IEvent} from '../../../shared/models/event';
import * as L from 'leaflet';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-preview-event',
    templateUrl: './preview-event.component.html',
    styleUrls: ['./preview-event.component.css']
})
export class PreviewEventComponent implements OnInit {

    defaultImg = environment.assetsPath  + '/placeholder-img.png';
    map: any;
    @Input() data: IEvent;
    @Input() isJoinBtnEnabled = false;

    constructor() {
    }

    ngOnInit() {
        this.initMap();
    }

    initMap() {
        this.map = L.map('map').setView([51.673858, 7.815982], 1);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
        }).addTo(this.map);
    }

    isDateNull(start, end) {
        return start === null || end === null;
    }

    checkImgPath(src) {
        return src && src !== '' ? src : this.defaultImg;
    }

    isStartEndDateEqual() {
        if (this.data && this.data.start && this.data.start) {
            const start = new Date(this.data.start);
            const end = new Date(this.data.end);
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0);
            return start.toDateString() === end.toDateString();
        }
        return true;
    }

}
