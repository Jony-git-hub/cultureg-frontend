import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateFormatter {

  numberToStringTable(milliseconds: number) {
    const date = new Date(milliseconds);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
