import { Directive, ElementRef } from '@angular/core';
//import { ElementRef } from '@angular/core/src/linker/element_ref';
import 'ng2-owl-carousel';

import * as $ from 'jquery';

@Directive({
  selector: '[miniSlider]',
  host: {
    'class': ''
  }
})
export class MinSliderDirective {

  constructor(private el: ElementRef) { }
  ngAfterViewInit() {
    console.log("Directive",$(this));
  //   $(this.el.nativeElement).owlCarousel({
  //     margin: 10,
  //     nav: true,
  //     loop: true,
  //     responsive: {
  //         0: {
  //             items: 1
  //         },
  //         600: {
  //             items: 3
  //         },
  //         1000: {
  //             items: 5
  //         }
  //     }
  // });
    // $(document).ready(function(){
    //   // code to execute
    //   });
    /*
    console.log((<any>$('[miniSlider]')));
    (<any>$('[miniSlider]'))[0].owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          }
      }
  });
  */
    //$(this)[0]
    /*
    $(this.elem.nativeElement).owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          }
      }
  });
  */
  }
}
