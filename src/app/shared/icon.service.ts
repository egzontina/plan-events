import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../environments/environment';

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
      this.domSanitizer.bypassSecurityTrustResourceUrl( environment.assetsPath + '/icons/calendar.svg'));
     this.matIconRegistry.addSvgIcon('down_arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl(environment.assetsPath  + '/icons/down-arrow.svg'));
  }
}
