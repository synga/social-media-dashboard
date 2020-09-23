/**
 * Analytic model for typing and intellisense
 */
export class Analytic {
  public value: number; // value of subscribers and followers
  public platform: string; // the social media (fb, twitter...)
  public metric: string; // the current metric beeing analysed
  public handler: string; // the user address or @
  public variation: { // the variation since the last period
    quantity: number; // how much it has gone up or down, percentage
    type: string; // if it has gone up or down
  };
}
