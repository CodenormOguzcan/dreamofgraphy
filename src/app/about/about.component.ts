import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  carouselItems1: any[] = [

    { image: 'https://live.staticflickr.com/65535/53054736351_f56b05649b_k.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054146967_802e1c6ccb_h.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054736521_0496f95a69_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054147212_a0e6599d72_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054736971_6368272faa_h.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054917759_8492a0ef63_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054736456_0867e7641a_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53055213923_4d1ef186e9_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054736821_7e2cc3e939_h.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054918094_1c64689ee1_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054736316_88f88feb08_h.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054737656_28bc91d1e1_h.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054147247_061dcda9ca_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53055115010_c92949ede2_h.jpg' },
    { image: 'https://live.staticflickr.com/65535/53055115070_8d6ef3afa7_h.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054918659_16c90a0c0e_h.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054147637_8d555bdfe2_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054147742_008102c2c1_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53055213288_f3cd0eef22_c.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054736351_9bec4e0195_c.jpg' },
  ];

  // Konfigurationsobjekt für das Carousel (z.B. Anzahl der sichtbaren Slides, Auto-Play, etc.)
  carouselConfig1: any = {
    // wie viele Slides angezeigt werden sollen
    slidesToShow: 5,
    // wie viele pro Klick umgeswitcht werden sollen
    slidesToScroll: 1,
    // automatisches abspielen
    autoplay: true,
    // nach 5 Sekunden wechselt das Bild
    autoplaySpeed: 2000,
    // unendliches Scrollen
    infinite: true,
    // Navigation anzeigen oder nicht anzeigen also vor oder zurück buttons
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  constructor() { }

  ngOnInit() {
    // Initialisierungslogik
  }

}
