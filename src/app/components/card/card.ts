import { Component } from '@angular/core';
import { Img } from '../img/img';
import { Info } from "../info/info";

@Component({
  selector: 'app-card',
  imports: [Img, Info],
  templateUrl: './card.html'
})
export class Card {

}
