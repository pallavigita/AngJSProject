import { Component, OnInit } from '@angular/core';
import { Commitment } from './../../../interfaces/imports';
@Component({
  selector: 'our-commitment',
  templateUrl: './our-commitment.component.html',
  styleUrls: ['./our-commitment.component.scss']
})
export class OurCommitmentComponent implements OnInit {
  commitments: Array<Commitment>;
  constructor() { }

  ngOnInit() {
    this.setCommitment();
  }

  setCommitment() {
    this.commitments = [
      {
        name: "Our commitment",
        description: "Reap benefits of carefully tested and all-inclusive products with our competitive prices and optimized projects",
        icon: "fa fa-gear"
      },
      {
        name: "Client focus",
        description: "Share feedback & suggestions for strategic improvements. Stay informed with uninterrupted communication via reporting",
        icon: "fa fa-gear"
      },
      {
        name: "Dedicated team",
        description: "Committed to a Dedicated Team model that provides you with full-time software professionals working exclusively on your project.",
        icon: "fa fa-gear"
      },
      {
        name: "Quality Assurance",
        description: "Our professional QA team tests each interim deliverable to ensure all requirements and specifications are met.",
        icon: "fa fa-gear"
      },
      {
        name: "Our Expertise",
        description: "Passion for innovation and desperation for excellence are our core expertise.",
        icon: "fa fa-gear"
      },
      {
        name: "Unlimited Support",
        description: "Driven by passion, our support team delivers unlimited support for 24/7/365",
        icon: "fa fa-gear"
      }
    ]
  }

}
