import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { VRAIO_CLIENTS } from '../../utils/Constants';

declare var jQuery: any;

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolios: Array<any>;
  clients: Array<any>;
  clientsCarousal: HTMLDivElement;
  @ViewChild("clientsC") clientsCarousalViewChild: ElementRef;
  constructor() { }

  ngOnInit() {
    this.setPortfolios();
    this.setClients();
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
  }

  setPortfolios() {
    this.portfolios = [
      {
        name: "Gopalan Skill Academy",
        icon: "GSA.png",
        link: "http://gopalanskillacademy.in/",
        description: "Gopalan Skill Academy expands its portfolio of solutions to offer skill building solutions for the various sectors. As India gears itself for the Green Revolution, Gopalan Skill Academy is geared to leverage massive opportunities that exist in sectors by providing skill building solutions."
      },
      {
        name: "App Biologicals",
        icon: "appbiologocals.png",
        link: "",
        description: "APP BIOLOGICALS specializes in manufacturing of diabetic health care products comprehensively built on herbal platform, which are time tested and trusted all over the country. The company is administerd by a highly experienced, innovative team of professionals who are dedicated to sourcing and selling the highest quality natural products made from Maximum strength and completely pure ingredient."
      },
      {
        name: "JACPMC",
        icon: "jacpmc.png",
        link: "http://jacpmc.com/",
        description: "Project Management is part of our core service and is a result of our understanding of our Client's needs. We identify which configuration of our services will achieve our client's required outcome. We then provide solutions to achieve these objectives, while also adding value and completing projects within budget."
      },
      {
        name: "Mass Ventures",
        icon: "massVentures.png",
        link: "http://massventures.in/",
        description: "When it comes to your website, off-the-peg is off-limits! Your business is unique and we believe your website should be too! We create websites that work! From design-led static websites to full CMS, we have all the skills to make your site look good and deliver."
      },
      {
        name: "Unicare Projects",
        icon: "unicareprojects.png",
        link: "http://unicareprojects.com/",
        description: "Unicare projects is a Dynamic Civil Engineering orented company with Clients across Inida and offices in Bangalore, Hyderabad, Mumbai, Calcutta. Having a strategic tie-up with waterproofing membranes companies also in Association with MNC's of construction chemical across pan India. We serve Infracture Projects, Expert in providing technical sollution for pre/post Construction issue in the Civil Engineering Industry."
      },
      {
        name: "Morel Mushrooms",
        icon: "morel.png",
        link: "http://morelmushroomfarm.com/",
        description: "We are happy to introduce our self as Morel Mushroom Farm today, as we have started mushroom cultivation from last 4 years in small scale as to understand the practical procedure of Mushroom Cultivation and to understand market requirements. Since we have met our small targets, which have taken us to increase our production in corporate method, so then we have started our new plant in January 2017 as big scale with the production capacity of more than 100 KGs per day using machineries in corporate way to increase our production with high quality."
      }
    ]
  }

  setClients() {
    this.clients = VRAIO_CLIENTS
  }
}