import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transposit';

  json = {h1: [ 'Feature', 'Architecture Overview' ], h2: ['On Activity Close'], h3: ['Refreshing metrics for all teams']  };
}