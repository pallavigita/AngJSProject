export interface ShortServices {
    name: String;
    description: String;
    icon: String;
    sublinks?: Array<any>;
  }
  
export interface ShortAchievements {
    description: String;
    font: String;
    number: number;
    unit: String;
  }

export interface ImagesList{
    image: String;
    caption: {
      title: String;
      desc: String;
    }
  }
export interface CarouselSetting {
    id: String;
    type: String;
    animation: boolean;
    items: Array<ImagesList>
  }
export interface Progress{
  name: String;
  description: String;
  icon: String;
}
export interface Commitment{
  name: String;
  description: String;
  icon: String;
}

export class Services{
  services: Array<any>;
  getAllServices() {
    this.services = [
    {
      name: "Web Development",
      route: "web",
      type: "link",
      active: true,
      icon: "CustomWeb.jpg"
    },
    {
      name: "Web Hosting & Maintenance",
      route: "web",
      type: "link",
      active: true,
      icon: "CustomWeb.jpg"
    },
    {
      name: "Software consulting services",
      route: "software-consulting-services",
      type: "link",
      active: true,
      icon: "software-consulting-service.jpg"
    },
    {
      name: "E Commerce Solutions",
      route: "e-commerce",
      type: "link",
      active: true,
      icon: "ecommerce.jpg"
    },
    {
      name: "Cloud Solutions",
      route: "cloud",
      type: "link",
      active: true,
      icon: "cloud.jpg"
    },
    {
      name: "Mobile Applications",
      route: "mobile",
      type: "link",
      active: true
    },
    {
      name: "Search Engine Optimization",
      route: "seo",
      type: "link",
      active: true
    },
    {
      name: "Social Media Marketing",
      route: "smm",
      type: "link",
      active: true
    },
    {
      name: "Analytical Solution",
      route: "analatical-solution",
      type: "link",
      icon: "analatics_2.jpg",
      active: true
    },
    {
      name: "Graphics and Media",
      route: "graphics",
      type: "link",
      active: true
    }
  ];
    return this.services;
  }
};