import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanService {

  num: number;
  letter: string;
  val: any;
  index: number;
  response: string;
  insert: any;
  values = [1, 5, 10, 50, 100, 500, 1000];
  letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  constructor() { }

  toRoman = (arabicNumber) => {
    const roman = [];
    // tslint:disable-next-line: no-conditional-assignment
    for (let i = 6; (this.letter = this.letters[i]); i--) {
      this.num = this.values[i];
      if (arabicNumber >= this.num) {
        let unit = Math.floor(arabicNumber / this.num);
        arabicNumber -= unit * this.num;
        if (unit < 4) {
          while (unit--) {
            roman.push(this.letter);
          }
        } else {
          this.val = roman.pop();
          this.index = (this.val ? this.letters.indexOf(this.val) : i) + 1;
          this.insert = this.letter + (this.letters[this.index] || 'M');
          roman.push(this.insert);
        }
      } else {
        roman.push('');
      }
    }
    return roman.join('') !== '' ? roman.join('') : 'El cero no existe en romano';
  }
}
