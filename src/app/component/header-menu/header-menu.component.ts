import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Services } from './../../../interfaces/imports';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  menuList: Array<any>;
  logoUrl: String;
  constructor(@Inject(DOCUMENT) private document: Document) { }
/*

      {
        name: "Home",
        route: 'home',
        type: 'link',
        active: false
      },
*/
  isFixed: boolean = false;
  ngOnInit() {
    this.getMenuList();
    this.logoUrl = "/assets/images/vraio.png";
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    //console.log(offset);
    if(offset > 28) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  getMenuList() {
    this.menuList = [
      {
        name: "Why Us",
        route: 'about',
        type: 'link',
        active: false
      },
      {
        name: "Services",
        route: 'service',
        type: 'dropdown',
        active: false,
        options: new Services().getAllServices()
      },
      // {
      //   name: "Products",
      //   route: 'product',
      //   type: 'link',
      //   active: false
      // },
      {
        name: "Server",
        route: 'server',
        type: 'dropdown',
        active: false,
        options: [
          {
            name: "Virtual Server",
            route: "vds",
            type: "link",
            active: true
          },
          {
            name: "Cloud Server",
            route: "cloud",
            type: "link",
            active: true
          }
        ]
      },
      {
        name: "Portfolio",
        route: 'portfolio',
        type: 'link',
        active: false
      },
      {
        name: "Contact",
        route: 'contact',
        type: 'link',
        active: false
      }
    ]
  }

}
