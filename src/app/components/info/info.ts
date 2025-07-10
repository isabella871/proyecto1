import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html'
})
export class Info {
  @Input()
  msg: string = "";
}
