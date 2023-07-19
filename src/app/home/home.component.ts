import {Component, OnInit} from '@angular/core';
import {SlickCarouselComponent} from "ngx-slick-carousel";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  carouselItems1: any[] = [
    { image: 'https://live.staticflickr.com/65535/53055092234_5fa14f113c_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054309452_80cd4b3f07_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53055376058_cea0bf2e07_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055286610_c99016684b_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53055275775_d6ef1978d5_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055388313_f10bb3f8db_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53055081049_36902b28be_o.jpg'},

    { image: 'https://live.staticflickr.com/65535/53055290345_696acd0685_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055387473_3af4b9d3f2_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055089264_b6ab16beee_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53054325437_5c206bb82b_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53055387543_af7fbd7f33_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054890401_111c662c96_o.jpg'},

    // { image: 'https://live.staticflickr.com/65535/53054325442_072b3cb091_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055283670_a2b8238d7d_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53055081459_c8975ab7e9_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054318187_3b83febbcd_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53054890231_0101c823c8_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055283845_389278afcd_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055071994_7cd4071115_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055092779_224f59092d_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53054309807_84c59d3af3_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054318092_39430d6543_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054299977_ac5bcd4feb_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054907776_dae01b0e44_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054890221_32aba7699e_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53055384873_b585e5a8ec_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054899096_5c8b66f3b9_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054317927_b9d34106de_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53055096294_f468b979d3_o.jpg'},
    // { image: 'https://live.staticflickr.com/65535/53054907866_7cd9c555af_o.jpg'},

  ];

  // Konfigurationsobjekt für das Carousel (z.B. Anzahl der sichtbaren Slides, Auto-Play, etc.)
  carouselConfig1: any = {
    // wie viele Slides angezeigt werden sollen
    slidesToShow: 4,
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

  carouselItems2 : any[] = [
    { image: 'https://live.staticflickr.com/65535/53054899096_5c8b66f3b9_o.jpg' },
    { image: 'https://live.staticflickr.com/65535/53054309807_84c59d3af3_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055081049_36902b28be_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53054309927_ecf29cceca_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055275775_d6ef1978d5_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53054309452_80cd4b3f07_o.jpg'},
    { image: 'https://live.staticflickr.com/65535/53055376058_cea0bf2e07_o.jpg'},

  ]
  carouselConfig2: any = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false
  };

  carouselConfig3: any = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false
  };

  carouselConfig4: any = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true
  };

  constructor() { }

  ngOnInit() {
    // Initialisierungslogik
  }
}
