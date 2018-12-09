import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  services: Array<any>;
  constructor() { }

  ngOnInit() {
    this.services = [
      {
        name: "Custom Web Applications",
        route: "custom-webapp",
        type: "link",
        active: true
      },
      {
        name: "Web Development",
        route: "web",
        type: "link",
        active: true
      },
      {
        name: "Web Hosting & Maintenance",
        route: "web",
        type: "link",
        active: true
      },
      {
        name: "E Commerce Solutions",
        route: "e-commerce",
        type: "link",
        active: true
      },
      {
        name: "Software Development",
        route: "sowtware-development",
        type: "link",
        active: true
      },
      {
        name: "Cloud Solutions",
        route: "cloud",
        type: "link",
        active: true
      },
      {
        name: "Mobile Applications",
        route: "mobile",
        type: "link",
        active: true
      },
      {
        name: "SEO & SMM",
        route: "seo-smm",
        type: "link",
        active: true
      },
      {
        name: "Digital Marketing",
        route: "digital-market",
        type: "link",
        active: true
      },
      {
        name: "Graphics and Media",
        route: "graphics",
        type: "link",
        active: true
      },
      {
        name: "Analytical Solutions",
        route: "analatics",
        type: "link",
        active: true
      },
      {
        name: "Market Research",
        route: "market-research",
        type: "link",
        active: true
      }
    ]
  }

}
