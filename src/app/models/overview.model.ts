/**
 * Overview model for typing and to help the intellisense.
 */
export class Overview {
  public variation: { // the variation since the last period
    quantity: number; // how much it has gone up or down, percentage
    type: string; // if it has gone up or down
  };
  public platform: string; // the platform
  public value: number; // the value for the metric
  public metric: string; // the metric beeing analysed, likes, followers, rts
}
