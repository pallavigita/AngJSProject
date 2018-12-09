import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  lat: number = 12.9196271;
  lng: number = 77.6126551; 
  zoom: number = 12;
  openInfoWindow: boolean = true;
  markers: marker[] = [
	  {
		  lat: 12.9196271,
		  lng: 77.6126551,
		  label: 'A',
      info: ["#63, 1st Floor, 16th Main Road,", "8th Cross Road, Gangotri circle,", "BTM Layout 1 ( Near Udupi Garden ),", "Bengaluru, Karnataka 560076"]
	  },
	  {
		  lat: 12.8905765,
		  lng: 77.5994862,
		  label: 'B',
      info: ["#FF2, Parvatha Krishna, Ramachandrappa Layout,", "Subramanyapura Main Road, Raghavendra Layout,", "Gubbalala, Subramanyapura,", "Bengaluru, Karnataka 560061"]
	  }
  ]

  log(x) {
    console.log(x);
  }

  submit(form) {
    console.log("FORM: ", form);
  }
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
  info: Array<string>;
}
