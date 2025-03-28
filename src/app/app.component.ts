import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeadlineTimerComponent } from './deadline-timer/deadline-timer.component';

@Component({
  selector: 'app-root',
  imports: [DeadlineTimerComponent],
  template: `
    <h1>Deadline Timer App</h1>
    <app-deadline-timer></app-deadline-timer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deadline-timer-app';
}
