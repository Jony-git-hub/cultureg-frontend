import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DurationFormatter {

  numberToStringTable(milliseconds: number): string {
    const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor(
      (milliseconds % (60 * 60 * 1000)) / (60 * 1000)
    );
    const seconds = Math.floor(
      (milliseconds % (60 * 1000)) / 1000
    );

    return `${days}j ${hours}h ${minutes}m ${seconds}s`;
  }

  numberToStringGame(milliseconds: number) {
    const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor(
      (milliseconds % (60 * 60 * 1000)) / (60 * 1000)
    );
    const seconds = Math.floor(
      (milliseconds % (60 * 1000)) / 1000
    );

    return `${days}j ${hours}h ${minutes}m ${seconds}s`;
  }
}
