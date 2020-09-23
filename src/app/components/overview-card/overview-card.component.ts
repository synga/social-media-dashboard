import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Overview } from 'src/app/models/overview.model';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent implements OnInit {
  /**
   * Input receiving overview data from the parent component
   */
  @Input() data: Overview;
  /**
   * The css mode, can be toggled between dark and light
   */
  public viewMode = false;
  /**
   * Will receive the subject that observes if the app is in dark mode
   */
  public toggleMode: Subject<boolean>;

  constructor(private _toggle: ToggleService) {}

  ngOnInit(): void {
    this.toggleMode = this._toggle.toggleMode;
    this.toggleMode.subscribe((value) => this.viewMode = value);
  }
}
