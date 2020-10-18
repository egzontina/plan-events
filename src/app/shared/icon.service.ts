import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  public registerIcons(): void {
    this.loadIcons();
  }

  private loadIcons(): void {
     this.matIconRegistry.addSvgIcon('calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/calendar.svg'));
     this.matIconRegistry.addSvgIcon('down_arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/down-arrow.svg'));
  }
}
