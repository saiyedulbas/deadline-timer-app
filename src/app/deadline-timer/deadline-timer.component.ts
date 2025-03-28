import { Component, OnDestroy, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription, switchMap, takeWhile } from 'rxjs';

@Component({
  selector: 'app-deadline-timer',
  standalone: true,
  imports: [],
  template: `
    <div>
      Seconds left to deadline: {{ secondsLeft() }}
    </div>
  `,
  styles: [`
    div {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }
  `]
})
export class DeadlineTimerComponent implements OnDestroy {
  private countdownSubscription!: Subscription;
  private secondsLeftSignal = signal(0);

  constructor(private http: HttpClient) {
    this.fetchDeadline();
  }

  get secondsLeft(): Signal<number> {
    return this.secondsLeftSignal;
  }

  private fetchDeadline(): void {
    this.http.get<{ secondsLeft: number }>('http://localhost:3000/deadline').subscribe(response => {
      this.startCountdown(response.secondsLeft);
    });
  }

  private startCountdown(seconds: number): void {
    this.countdownSubscription?.unsubscribe(); // Unsubscribe if already running
    this.secondsLeftSignal.set(seconds);

    this.countdownSubscription = interval(1000)
      .pipe(
        takeWhile(() => this.secondsLeftSignal() > 0)
      )
      .subscribe(() => {
        this.secondsLeftSignal.set(this.secondsLeftSignal() - 1);
      });
  }

  ngOnDestroy(): void {
    this.countdownSubscription?.unsubscribe();
  }
}
