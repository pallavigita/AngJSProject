import { Component, OnInit } from '@angular/core';

interface OnlineAvailability {
  network: String,
  link: String,
  icon: String
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ourConnections: Array<OnlineAvailability>;
  mores: Array<any>;
  constructor() { }

  ngOnInit() {
    this.setOurConnections();
    this.setMores();
  }

  setOurConnections() {
    this.ourConnections = [
      {
        network: "Facebook",
        link: "https://www.facebook.com/vraio/",
        icon: "fa fa-facebook"
      },
      {
        network: "Twitter",
        link: "https://www.facebook.com/vraio/",
        icon: "fa fa-twitter"
      },
      {
        network: "Linkedin",
        link: "https://www.facebook.com/vraio/",
        icon: "fa fa-linkedin"
      }
    ]
  }

  setMores() {
    this.mores = [
      {
        name: "Careers",
        link: "#",
        icon: undefined
      },
      {
        name: "case studies",
        link: "#",
        icon: undefined
      },
      {
        name: "Blog",
        link: "http://blog.vraio.in/",
        icon: undefined,
        newtab: true
      },
      {
        name: "Services",
        link: "service",
        icon: undefined,
        newtab: true
      },
      {
        name: "resources",
        link: "#",
        icon: undefined
      },
      {
        name: "forums",
        link: "#",
        icon: undefined
      },
      {
        name: "affiliates",
        link: "#",
        icon: undefined
      },
      {
        name: "site map",
        link: "#",
        icon: undefined
      }
    ]
  }

}
