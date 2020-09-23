import { Injectable } from '@angular/core';
import { Analytic } from '../models/analytic.model';
import { Overview } from '../models/overview.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  /**
   * The analytics data, could be data returned from some API
   */
  private analyticsData: Array<Analytic> = [
    {
      platform: 'facebook',
      value: 1917,
      metric: 'followers',
      handler: 'no_user',
      variation: {
        quantity: 12,
        type: 'up'
      }
    },
    {
      platform: 'twitter',
      value: 1044,
      metric: 'followers',
      handler: 'syn_ga',
      variation: {
        quantity: 99,
        type: 'up'
      }
    },
    {
      platform: 'instagram',
      value: 11000,
      metric: 'followers',
      handler: 'syn_ga',
      variation: {
        quantity: 1099,
        type: 'up'
      }
    },
    {
      platform: 'youtube',
      value: 8239,
      metric: 'subscribers',
      handler: 'GabrielBarretoDev',
      variation: {
        quantity: 144,
        type: 'down'
      }
    }
  ];

  /**
   * Overview data of other metrics from the analytics
   * Could be a property of "analytic", don't know, just for showing
   */
  private overviewData: Array<Overview> = [
    {
      metric: 'Page views',
      value: 87,
      platform: 'facebook',
      variation: {
        quantity: 3,
        type: 'up'
      }
    },
    {
      metric: 'Likes',
      value: 52,
      platform: 'facebook',
      variation: {
        quantity: 2,
        type: 'down'
      }
    },
    {
      metric: 'Likes',
      value: 5462,
      platform: 'instagram',
      variation: {
        quantity: 2257,
        type: 'up'
      }
    },
    {
      metric: 'Profile Views',
      value: 52000,
      platform: 'instagram',
      variation: {
        quantity: 1375,
        type: 'up'
      }
    },
    {
      metric: 'Retweets',
      value: 117,
      platform: 'twitter',
      variation: {
        quantity: 303,
        type: 'up'
      }
    },
    {
      metric: 'Likes',
      value: 507,
      platform: 'twitter',
      variation: {
        quantity: 553,
        type: 'up'
      }
    },
    {
      metric: 'Likes',
      value: 87,
      platform: 'youtube',
      variation: {
        quantity: 19,
        type: 'down'
      }
    },
    {
      metric: 'Total views',
      value: 1407,
      platform: 'youtube',
      variation: {
        quantity: 12,
        type: 'down'
      }
    }
  ];

  constructor() { }

  /**
   * A get method that just return de Analytics data
   */
  get analytics() {
    return this.analyticsData;
  }

  /**
   * A get method to get overview data
   */
  get overviews() {
    return this.overviewData;
  }
}
