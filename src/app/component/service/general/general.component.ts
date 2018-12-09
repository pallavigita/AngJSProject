import { Component, OnInit } from '@angular/core';
import { Services } from './../../../../interfaces/imports';
@Component({
  selector: 'service-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  services: Array<any>
  constructor() { }

  ngOnInit() {
    this.setServices();
  }

  setServices() {
    this.services = new Services().getAllServices();
  }

}
