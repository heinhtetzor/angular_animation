import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './_animations/slider';
import { fader } from './_animations/fader';
import { transformer } from './_animations/transformer';
import { stepper } from './_animations/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // <-- add your animations here
    //fader
    //slider
    transformer
    //stepper
  ]
})
export class AppComponent {
  title = 'angular-animation';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

