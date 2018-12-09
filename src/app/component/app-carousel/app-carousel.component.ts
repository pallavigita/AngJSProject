import { Component, OnInit, Input } from '@angular/core';
import { CarouselSetting } from './../../../interfaces/imports';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.scss']
})
export class AppCarouselComponent implements OnInit {
  @Input('setting') settings: CarouselSetting;
  constructor() { }

  ngOnInit() {
    console.log("setting", this.settings);
  }
}
