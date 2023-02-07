import { Component } from '@angular/core';
// import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'album-app';

  constructor(
  
    // private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
   
  ) {}

  // private addSvgIcon(iconName: string, url: string) {
  //   this.matIconRegistry.addSvgIcon(
  //     iconName,
  //     this.domSanitizer.bypassSecurityTrustResourceUrl(url),
  //   );
  // }
}
