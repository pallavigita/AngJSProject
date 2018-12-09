import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  @Input('inData') testimonial;
  constructor() { }

  ngOnInit() {
  }

}
