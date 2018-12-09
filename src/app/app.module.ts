import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './component/header-menu/header-menu.component';
import { AppcustomdropdownDirective } from './directive/appcustomdropdown.directive';
import { BootstrapComponent } from './component/common/bootstrap/bootstrap.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TopHeaderComponent } from './component/top-header/top-header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppCarouselComponent } from './component/app-carousel/app-carousel.component';
import { OurProgressComponent } from './component/our-progress/our-progress.component';
import { OurCommitmentComponent } from './component/our-commitment/our-commitment.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { CustomWebappComponent } from './component/service/custom-webapp/custom-webapp.component';
import { ECommerceComponent } from './component/service/e-commerce/e-commerce.component';
import { WebDesignDevelopmentComponent } from './component/service/web-design-development/web-design-development.component';
import { VirtualServerComponent } from './component/servers/virtual-server/virtual-server.component';
import { CloudServerComponent } from './component/servers/cloud-server/cloud-server.component';
import { OurClientsComponent } from './component/our-clients/our-clients.component';
import { MiniCarouselComponent } from './component/mini-carousel/mini-carousel.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { GeneralComponent } from './component/service/general/general.component';
import { AboutComponent } from './component/about/about.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { MinSliderDirective } from './min-slider.directive';
import { CareerComponent } from './component/service/career/career.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
// import { NgxCarouselModule } from 'ngx-carousel';
// import 'hammerjs';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'service',
    component: GeneralComponent
  },
  {
    path: "service/custom-webapp",
    component: CustomWebappComponent
  },
  {
    path: "service/e-commerce",
    component: ECommerceComponent
  },
  {
    path: "service/web",
    component: WebDesignDevelopmentComponent
  },
  {
    path: "server/vds",
    component: VirtualServerComponent
  },
  {
    path: "server/cloud",
    component: CloudServerComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "careers",
    component: CareerComponent
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    AppcustomdropdownDirective,
    BootstrapComponent,
    HomeComponent,
    TopHeaderComponent,
    FooterComponent,
    AppCarouselComponent,
    OurProgressComponent,
    OurCommitmentComponent,
    ContactUsComponent,
    CustomWebappComponent,
    ECommerceComponent,
    WebDesignDevelopmentComponent,
    VirtualServerComponent,
    CloudServerComponent,
    OurClientsComponent,
    MiniCarouselComponent,
    GeneralComponent,
    AboutComponent,
    PortfolioComponent,
    MinSliderDirective,
    CareerComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes, { useHash: true }
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZAXr96cInXvHqxhhfPJFUgtsV0TCBcGc'
    }),
    AgmSnazzyInfoWindowModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

    "@ng-bootstrap/ng-bootstrap": "^1.0.0-beta.5",
    "bootstrap": "^4.0.0-alpha.6",
    "popper": "^1.12.6",

*/
