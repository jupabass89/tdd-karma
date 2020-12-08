import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }
  num;
  letter;
  val;
  index;
  response;
  insert;
  arabicNumber;
  values = [1, 5, 10, 50, 100, 500, 1000];
  letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  ngOnInit() {
  }

  toRoman = () => {
    const roman = [];
    // tslint:disable-next-line: no-conditional-assignment
    for (let i = 6; (this.letter = this.letters[i]); i--) {
      this.num = this.values[i];
      if (this.arabicNumber >= this.num) {
        let unit = Math.floor(this.arabicNumber / this.num);
        this.arabicNumber -= unit * this.num;
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
    this.response = roman.join('');
  }
}