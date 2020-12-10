import { Component } from '@angular/core';
import { RomanService } from '../roman.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  arabicNumber: number;
  response: string;

  constructor(private romanService: RomanService) { }

  toRoman = () => {
    this.response = this.romanService.toRoman(this.arabicNumber);
  }
}
