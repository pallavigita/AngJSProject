import { Component, OnInit } from '@angular/core';
import { Progress } from './../../../interfaces/imports';
@Component({
  selector: 'our-progress',
  templateUrl: './our-progress.component.html',
  styleUrls: ['./our-progress.component.scss']
})
export class OurProgressComponent implements OnInit {
  progresses: Array<Progress>;

  constructor() { }

  ngOnInit() {
    this.setProgresses();
  }

  setProgresses() {
    this.progresses = [
      {
        name: "Planning",
        description: "Understanding what you want out of your site and how do you plant to implement it",
        icon: "fa fa-flag"
      },
      {
        name: "Design",
        description: "We will Create a beautiful, affordable website design for your creative marketing project",
        icon: "fa fa-flag"
      },
      {
        name: "Development",
        description: "We develop content management systems for clients who need more than just the basics",
        icon: "fa fa-flag"
      },
      {
        name: "Launch",
        description: "After successful testing the product is delivered / deployed to the customer for their use",
        icon: "fa fa-flag"
      },
      {
        name: "Maintain",
        description: "It is an important step which makes sure that your site works with efficiency all the time",
        icon: "fa fa-flag"
      }
    ]
  }
}
