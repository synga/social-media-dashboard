import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Analytic } from './models/analytic.model';
import { Overview } from './models/overview.model';
import { AnalyticsService } from './services/analytics.service';
import { ToggleService } from './services/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /**
   * Analytics data
   */
  public analytics: Array<Analytic>;
  /**
   * The overviews inside
   */
  public overviews: Array<Overview>;
  /**
   * The css mode, can be toggled between dark and light
   */
  public viewMode = false;
  /**
   * Will receive the subject that observes if the app is in dark mode
   */
  public toggleMode: Subject<boolean>;

  constructor(private _analytics: AnalyticsService, private _toggle: ToggleService) {}

  ngOnInit() {
    // fetch for both analytics and overviews
    this.analytics = this._analytics.analytics;
    this.overviews = this._analytics.overviews;
    // subscribe to dark mode status
    this.toggleMode = this._toggle.toggleMode;
    this.toggleMode.subscribe((value) => this.viewMode = value);
  }

  /**
   * Gets the total of followers in the analytics
   */
  getTotalFollowers = (): number => this.analytics.reduce((counter = 0, v) => (counter + v.value), 0);
}
