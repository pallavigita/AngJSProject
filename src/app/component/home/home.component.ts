import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//import { NgxCarousel } from 'ngx-carousel'; //https://www.npmjs.com/package/ngx-carousel
import { NgxCarousel } from 'ngx-carousel';
import { ShortServices, ShortAchievements, CarouselSetting } from './../../../interfaces/imports';
import * as $ from 'jquery';
import { VRAIO_CLIENTS, VRAIO_RECENT_WORKS } from '../../utils/Constants';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {
  services: Array<ShortServices>;
  achivements: Array<ShortAchievements>;
  carouselSetting: CarouselSetting;
  miniImages: Array<any>;
  recentWorks: Array<any>;
  clients: Array<any>;
  testimonials: Array<any>;
  clientsCarousal: HTMLDivElement;
  @ViewChild("clientsC") clientsCarousalViewChild: ElementRef;
  partnersCarousal: HTMLDivElement;
  @ViewChild("partnersC") partnersCarousalViewChild: ElementRef;
  testimonialsCarousal: HTMLDivElement;
  @ViewChild("testimonialsC") testimonialsCarousalViewChild: ElementRef;
  constructor() { }

  ngOnInit() {
    this.setServices();
    this.setAchievements();
    this.setCarouselSetting();
    this.setRecentWorks();
    this.setClients();
    this.setTestimonials();
  }

  ngAfterViewInit() {
    this.clientsCarousal = <HTMLDivElement>this.clientsCarousalViewChild.nativeElement;
    jQuery(this.clientsCarousal).owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      smartSpeed: 250, 
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 4
          },
          1000: {
              items: 6
          }
      }
  });
  this.partnersCarousal = <HTMLDivElement>this.partnersCarousalViewChild.nativeElement;
  jQuery(this.partnersCarousal).owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});
this.testimonialsCarousal = <HTMLDivElement>this.testimonialsCarousalViewChild.nativeElement;
jQuery(this.testimonialsCarousal).owlCarousel({
  margin: 10,
  nav: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
      0: {
          items: 2
      },
      600: {
          items: 2
      },
      1000: {
          items: 4
      }
  }
});
    //console.log(this.layoutMenuScroller);
  }

  setTestimonials(){
    this.testimonials = [
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      },
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      },
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      },
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      },
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      },
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      },
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      },
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      },
      {
        name: "Vinay Kempa",
        work: "Samanya Codiga",
        subject: "Great work guys",
        message: "Our company engaged Atlogys for the design, implementation and deployment of an energy commissioning DB application. As a non IT savvy customer, we were advised on appropriate software functionality.",
        image: "http://www.atlogys.com/wp-content/uploads/2017/11/kamal-2.jpg"
      }
    ]
  }

  setminiImages() {
    this.miniImages = [
      1,2,3,4,5
    ]
  }

  setClients() {
    this.clients = VRAIO_CLIENTS
  }

  setRecentWorks() {
    this.recentWorks = VRAIO_RECENT_WORKS
  }
/*
,
      {
        name: "CVK Hi Point",
        icon: "hipoint.png",
        link: "http://cvkhipoint.in/"
      },
      {
        name: "Unicare Projects",
        icon: "unicareprojects.png",
        link: "http://unicareprojects.com/"
      }
*/
  serviceName(index, service) {
    return service ? service.name : undefined;
  }

  setServices() {
    this.services = [
      {
        name: "Software Development",
        description: "We specialize in developing database driven websites with the functionality to meet your needs. From e-commerce retail sites to corporate intranets, we understand the value of good functionality. We develop web sites and applications to work in any environment and across all platforms and browsers.",
        icon: "softwareDevelopment.jpg",
        sublinks: [
          {
            link: "/service/web",
            name: "web application"
          },
          {
            link: "/service/mobile",
            name: "mobile application"
          }
        ]
      },
      {
        name: "Analytics & Digital Marketing",
        description: "We help clients reach target audience, generate leads, and increase revenue via multi-channel marketing using persona, demographic and psychographic profiling.",
        icon: "analatics.jpg",
        sublinks: [
          {
            link: "/service/web",
            name: "SEO"
          },
          {
            link: "/service/web",
            name: "SMO"
          }
        ]
      },
      {
        name: "Software Consulting Services",
        description: "Re-defining Traditional Software Development with Smart 'CTO' Services. We then design a robust scalable architecture as the core foundation for your products.",
        icon: "software-consulting-service.jpg",
        sublinks: [
          {
            link: "",
            name: "Technology Strategy Consulting"
          },
          {
            link: "",
            name: "Business Intelligence"
          },
          {
            link: "",
            name: "Managed Software Vendor Services"
          }
        ]
      }
    ];
  }

  setAchievements() {
    this.achivements = [
      {
        description: "As satisfied customers",
        font: "fa fa-heart-o",
        number: 99,
        unit: "%"
      },
      {
        description: "As satisfied customers",
        font: "fa fa-heart",
        number: 99,
        unit: undefined
      },
      {
        description: "As satisfied customers",
        font: "fa fa-heartbeat",
        number: 233,
        unit: undefined
      },
      {
        description: "As satisfied customers",
        font: "fa fa-heartbeat",
        number: 10,
        unit: "PM"
      }
    ]
  }

  setCarouselSetting() {
    this.carouselSetting = {
      id: "homeCarousel",
      type: "banner",
      animation: true,
      items: [
        {
          image: "/assets/images/sliders/workprocess.jpg",
          caption: {
            title: "For a Better Customized WEB & MOBILE Development",
            desc: "We have developed a simple process to create experiences that are attractive, simple to use, and drive results for your company"
          }
        },
        {
          image: "/assets/images/sliders/software_consulting.jpg",
          caption: {
            title: "Software Consulting",
            desc: "As CTO's we work collaboratively and closely with you to ensure the final product meets all your business and stratagic goals"
          }
        },
        {
          image: "/assets/images/sliders/analatics_2.jpg",
          caption: {
            title: "Data Analatical Solution",
            desc: "We focus on your businesses which increasingly recognized the need to bring in analatical and research services"
          }
        },
        {
          image: "/assets/images/sliders/App-Development-Process.jpg",
          caption: {
            title: "Build Your Mobile App",
            desc: "Creating quite stunning Mobile experiences with Clean & Valid code, latest technologies Apps that excel in high-complexity environments"
          }
        }
      ]
    }
  }
}