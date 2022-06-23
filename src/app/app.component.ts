import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-ts';
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.getItem('access_token');
    }
  }
}
