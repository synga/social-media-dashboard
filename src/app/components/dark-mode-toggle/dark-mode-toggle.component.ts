import { Component } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent {
  /**
   * If the toggle input is checked
   */
  public checked = false;
  constructor(
    private _toggle: ToggleService
  ) { }

  /**
   * Changes the dark mode property for the toggle component, then calls the method on the
   * service to change it globally
   */
  changeToggleState() {
    this.checked = !this.checked;
    this._toggle.toggleDarkMode(this.checked);
  }

}
