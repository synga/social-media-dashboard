import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Analytic } from 'src/app/models/analytic.model';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {
  /**
   * The analytic data that comes from the parent component
   */
  @Input() data: Analytic;

  /**
   * The css mode, can be toggled between dark and light
   */
  public viewMode = false;
  /**
   * Will receive the subject that observes if the app is in dark mode
   */
  public toggleMode: Subject<boolean>;
  constructor(
    private _toggle: ToggleService
  ) { }

  ngOnInit(): void {
    this.toggleMode = this._toggle.toggleMode;
    this.toggleMode.subscribe((value) => this.viewMode = value);
  }

}
