import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  /**
   * Subject to emit the toggle status between components
   */
  private toggleModeObservable: Subject<boolean> = new Subject<boolean>();

  /**
   * Will toggle the dark mode, emitting the event and changing the class on body
   * @param status The current dark mode status, true means 'turn on dark mode'
   */
  public toggleDarkMode(status) {
    this.toggleModeObservable.next(status);
    const body: HTMLBodyElement = document.querySelector('body');
    // better way of doing this?
    body.classList.replace(status ? 'light' : 'dark', status ? 'dark' : 'light');
  }

  /**
   * Returns the subject that observes the status of dark mode
   */
  get toggleMode() {
    return this.toggleModeObservable;
  }
}
