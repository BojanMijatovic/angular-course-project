import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseProject-recipe-app';
  public loadedFeature = 'recipe';

  constructor() {
  }

  ngOnInit() { }

  public onNavigate(feature: string): string {
    return this.loadedFeature = feature;
  }

}
