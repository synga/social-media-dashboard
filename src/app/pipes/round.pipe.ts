import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  /**
   * Symbols for converting thousands, millions and billions into text abbreviation
   */
  private symbols: Array<{value: number, symbol: string}> = [
    { value: 1E3, symbol: 'K' },
    { value: 1E6, symbol: 'M' },
    { value: 1E9, symbol: 'B' }
  ];

  private rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

  transform(value: number, ...args: unknown[]): unknown {
    if (value >= 10000) {
      let convertedValue;
      this.symbols.forEach((sy) => {
        if (value >= sy.value) {
          convertedValue = (value / sy.value).toFixed(0).replace(this.rx, '') + sy.symbol;
        }
      });
      return convertedValue;
    } else {
      return value;
    }
  }

}
