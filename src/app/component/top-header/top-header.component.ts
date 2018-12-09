import { Component, OnInit } from '@angular/core';

interface QuickMenu {
  name: String;
  link: String;
  icon: String;
  newtab?: boolean;
}

@Component({
  selector: 'top-menu-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  items: Array<QuickMenu>;
  constructor() { }

  ngOnInit() {
    this.setQuickMenus();
  }

  setQuickMenus() {
    this.items = [
      {
        name: "Careers",
        link: "#", ///careers
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
        name: "Login",
        link: "#",
        icon: undefined
      }
    ]
  }

}
